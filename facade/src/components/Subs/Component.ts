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
    protected static listView(todoList: ITodoData[]): string {
        return `
		<div>
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

    protected static todoView(todo: ITodoData): string {
        const { id, content, completed } = todo;
        return `
	        <div>	
			  <input type="checkbox" data-id="${id}" ${completed ? "checked" : ""} />
			  <span style="text-decoration: ${
                  completed ? "line-through" : ""
              }">${content}</span>
			  <button data-id="${id}"> 删除</button>
			</div>
		`;
    }
}

export default Component;
