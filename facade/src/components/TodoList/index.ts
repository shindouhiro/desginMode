import { ITodoData } from "./../../typings/index";
class TodoList {
    private el: HTMLElement;
    private todoData: ITodoData[];
    constructor(el: HTMLElement, todoData: ITodoData[]) {
        this.el = el;
        this.todoData = todoData;
        console.log(this.el, this.todoData);
    }

    public init() {
        this.createComponents();
        this.render();
        this.bindEvent();
    }

    private createComponents() {
        console.log("createComponents");
    }

    private render() {
        console.log("render");
    }

    private bindEvent() {
        console.log("bindEvent");
    }
}

export default TodoList;
