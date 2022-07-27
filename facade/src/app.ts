import { ITodoData } from "./typings/index";
import TodoList from "./components/TodoList";
((doc) => {
    const oApp: HTMLElement = doc.querySelector("#app");
    const todoData: ITodoData[] = [
        {
            id: 1,
            content: "123",
            completed: true,
        },
        {
            id: 2,
            content: "234",
            completed: false,
        },
        {
            id: 3,
            content: "456",
            completed: true,
        },
    ];

    const init = (): void => {
        const todoList: TodoList = new TodoList(oApp, todoData);
        todoList.init();
    };
    init();
})(document);
