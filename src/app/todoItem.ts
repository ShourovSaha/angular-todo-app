export class TodoItem{

    task: string;
    complete: boolean;

    constructor(taskVal: string, complete: boolean = false){
        this.task = taskVal;
        this.complete = complete;
    }
}