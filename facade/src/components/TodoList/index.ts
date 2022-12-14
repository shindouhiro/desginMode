import { IListOptions } from "./../Subs/List";
import Input, { IInputOptions } from "../Subs/input";
import List from "../Subs/List";
import { ITodoData } from "./../../typings/index";
class TodoList {
    private el: HTMLElement;
    private todoData: ITodoData[];
    private input: Input;
    private list: List;
    private todoWrap: HTMLElement;
    constructor(el: HTMLElement, todoData: ITodoData[]) {
        this.el = el;
        this.todoData = todoData;
        this.todoWrap = document.createElement("div");
    }

    public init() {
        this.createComponents();
        this.render();
        this.bindEvent();
    }

    private createComponents() {
        this.input = new Input(<IInputOptions>{
            wrapperEl: this.todoWrap,
            placeholderText: "请输入",
            buttonText: "增加",
        });
        this.list = new List(<IListOptions>{
            wrapperEl: this.todoWrap,
            todoData: this.todoData,
        });
    }

    private render() {
        this.input.render();
        this.list.render();
        this.el.appendChild(this.todoWrap);
    }

    private bindEvent() {
        this.input.bindEvent();
        this.list.bindEvent();
    }
}

export default TodoList;
