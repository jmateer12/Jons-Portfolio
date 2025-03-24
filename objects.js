class Task{
    //task array to store all tasks in, this is static so it can be accessed without a object
    static tasks = [];

    //constructor to create objects of the Task type
    constructor(name, desc, isDone, priority){
        this.name = name;
        this.desc = desc;
        this.isDone = isDone;
        this.priority = priority;
        Task.tasks.push(this);
    }

    //getters and setters for the various properties in this class
    get name(){
        return this._name;
    }

    get desc(){
        return this._desc;
    }

    get isDone(){
        return this._isDone;
    }

    get priority(){
        return this._priority;
    }

    set name(newName){
        this._name = newName;
    }

    set desc(newDesc){
        this._desc = newDesc;
    }

    set isDone(state){
        this._isDone = state;
    }

    set priority(newPriority){
        this._priority = newPriority;
    }

    //This function lists all the tasks in the tasks array and gives the properties pertaining to them
    static listTasks(){
        if(Task.tasks.length == 0){
            document.getElementById("currtasks").innerHTML = "No Tasks in system"
        } else {
            document.getElementById("currtasks").innerHTML = "Current Tasks: <br>"
            for(let i = 0; i < Task.tasks.length; i++){
                document.getElementById("currtasks").innerHTML += `- ${Task.tasks[i].name}|${Task.tasks[i].desc}|${Task.tasks[i].isDone}|${Task.tasks[i].priority} <br>`;
            }
        }
    }

    //Adds a task to the tasks array and lists the current tasks at the end
    static addTask(){
        let name = document.getElementById('name').value;
        let desc = document.getElementById('description').value;
        let isDone = document.getElementById('isdone').checked;
        let priority = document.querySelector('input[name="priority"]:checked')?.value;
        
        if(name == ""){
            document.getElementById("currtasks").innerHTML = "No name entered please enter a name!"
            return;
        }

        if(desc == ""){
            document.getElementById("currtasks").innerHTML = "No description entered please enter a description!"
            return;
        }

        if (!priority) {
            document.getElementById("currtasks").innerHTML = "No Priority selected please select a priority!"
            return;
        }

        //Declare a new object of class Task with the parameters from the form
        let task = new Task(name, desc, isDone ? "Done" : "Not Done", priority);
        document.getElementById("taskform").reset();
        Task.listTasks();
    }

    //Removes a task from the tasks array based on the name and then lists the tasks 
    static removeTask(){
        let name = document.getElementById('name').value;
        
        if(name == ""){
            document.getElementById("currtasks").innerHTML = "No name entered please enter a name of a task to delete!"
            return;
        }

        for(let i = 0; i < Task.tasks.length; i++){
            if(name == Task.tasks[i].name){
                Task.tasks.splice(i, 1);
            }
            document.getElementById("taskform").reset();
            Task.listTasks();
            return;
        }
        
        document.getElementById("currtasks").innerHTML = `Task with the name "${name}" not found.`;
    }

    //Will update a particular task with the information in the form based on it's name
    static updateTask(){
        let name = document.getElementById('name').value;
        let desc = document.getElementById('description').value;
        let isDone = document.getElementById('isdone').checked;
        let priority = document.querySelector('input[name="priority"]:checked')?.value;

        if(name == ""){
            document.getElementById("currtasks").innerHTML = "No name entered please enter a name!"
            return;
        }

        if(desc == ""){
            document.getElementById("currtasks").innerHTML = "No description entered please enter a description!"
            return;
        }

        if (!priority) {
            document.getElementById("currtasks").innerHTML = "No Priority selected please select a priority!"
            return;
        }

        for(let i = 0; i < Task.tasks.length; i++){
            if(name == Task.tasks[i].name){
                Task.tasks[i].desc = desc;
                Task.tasks[i].isDone = isDone ? "Done" : "Not Done";
                Task.tasks[i].priority = priority;
            }
            document.getElementById("taskform").reset();
            Task.listTasks();
            return;
        }

        document.getElementById("currtasks").innerHTML = `Task with the name "${name}" not found.`;
    }

    //Sets the task that name's passed in to Done
    static markDone(){
        let name = document.getElementById('name').value;

        if(name == ""){
            document.getElementById("currtasks").innerHTML = "No name entered please enter a name of a task to delete!"
            return;
        }

        for(let i = 0; i < Task.tasks.length; i++){
            if(name == Task.tasks[i].name){
                Task.tasks[i].isDone = "Done";
            }
            document.getElementById("taskform").reset();
            Task.listTasks();
            return;
        }

        document.getElementById("currtasks").innerHTML = `Task with the name "${name}" not found.`;
    }
}

//Event listeners for buttons on home page to use class methods
document.getElementById("viewtasks").addEventListener("click", Task.listTasks);
document.getElementById("addtask").addEventListener("click", Task.addTask);
document.getElementById("removetask").addEventListener("click", Task.removeTask);
document.getElementById("updatetask").addEventListener("click", Task.updateTask);
document.getElementById("completetask").addEventListener("click", Task.markDone);