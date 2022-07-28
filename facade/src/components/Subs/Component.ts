import { ITodoData } from "./../../typings/index";
abstract class Component {
    protected static inputView(
        placeholderText: string,
        buttonText: string
    ): string {
        return `
	         <div>	
			    <input type="text" class="todo-input" placeholder="${placeholderText}"/>
				<button class="add-btn">${buttonText}</div>
			 </div>
		`;
    }
    public static listView(todoList: ITodoData[]): string {
        return `
		<div class="todo-list">
		${
            todoList.length
                ? todoList.map((todo: ITodoData) => {
                      return Component.todoView(todo);
                  })
                : null
        }
		</div>
    	`
            .split(",")
            .join("");
    }

    public static todoView(todo: ITodoData): string {
        const { id, content, completed } = todo;
        return `
	        <div class="todo-item">	
			  <input type="checkbox" data-id="${id}" ${completed ? "checked" : ""} />
			  <span style="text-decoration: ${
                  completed ? "line-through" : ""
              }" >${content}</span>
			  <button data-id="${id}"> 删除</button>
			</div>
		`;
    }
}

export default Component;
