import { ITodoData } from "./../../typings/index";
import Component from "./Component";
export interface IListOptions {
    wrapperEl: HTMLElement;
    todoData: ITodoData[];
}
class List extends Comment {
    private wrapperEl;
    private static todoData: ITodoData[];
    constructor(options) {
        super();
        this.wrapperEl = options.wrapperEl;
        List.todoData = options.todoData;
    }

    public render() {
        this.wrapperEl.innerHTML += Component.listView(List.todoData);
    }
}

export default List;
