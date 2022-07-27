abstract class Component {
    protected static inputView(placeholderText: string, buttonText: string) {
        return `
	         <div>	
			    <input type="text" class="todo-input" placeholder="${placeholderText}"/>
				<button class="add-btn">${buttonText}</div>
			 </div>
		`;
    }
}

export default Component;
