class Todo extends React.Component {
  constructor(props){
      super(props);

      // set done attribute and text attribute pass down
      this.state = { done: props.done,
                     text: props.text
                   };

      // onclick event call handleClick function of this class
      this.handleClick = this.handleClick.bind(this);

      // onchange event call handleChange function of this class
      this.handleChange = this.handleChange.bind(this);

      // on submit call handleSubmit function
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    // set checked box to the opposite of the current state (done)
    this.setState(
      state => ({
        done: !state.done
      }),
      function(event){
        // onclick update checkbox state (first part up) and then do submit
        this.handleSubmit(event)
      }
    );
  }

  handleChange(event){
    let text = event.target.value;

    // let me change the input text to whatever I write
    this.setState(state => ({
      text: text
    }));
  }

  handleSubmit(event){
    console.log("Submit logic here");

    //this.setState(
    //  state => ({

    //  })
    //);
  }

  render() {
    // drawing a div with class todo and a checkbox inside with
    // the text attribute pass as the text
    // se inicializan en el constructor arriba
    return <div className="todo">
              <span>
                  <input type="checkbox" checked={this.state.done} onClick={this.handleClick} />
                  <input type="text" value={this.state.text}
                                onChange={this.handleChange}
                                onBlur={this.handleSubmit} />
                </span>
           </div>;
  }
}

// List Class
class TodoList extends React.Component {
  constructor(props){
    super(props);

    // setting 5 todos by default
    this.state = {
                  todos: [
                    { id: 1, text: "Item 1", done: false},
                    { id: 2, text: "Item 2", done: false},
                    { id: 3, text: "Item 3", done: false},
                    { id: 4, text: "Item 4", done: false}
                  ]
                };

      this.newTodo = this.newTodo.bind(this);
    }

  newTodo(event){
    event.preventDefault();

    todos = this.state.todos;
    
    // push a new empty object to the array of ToDos
    todos.push({ id: "" });

    this.setState(state => ({
      todos: todos
    }));
  }

  render(){
    const todoList = this.state.todos.map((todo) =>
      <Todo key={todo.id.toString()} id={todo.id} text={todo.text} done={todo.done} />
    );

    // React.fragment is an abstract way of defining a div element
    // {todoList} render each of the 5 todos according to Todo component
    return <React.Fragment>
            <h1>React To-do App</h1>

            {todoList}

            <a href="#" onClick={this.newTodo}>New Todo</a>
          </React.Fragment>
  } // render
} // class

// Le digo que use el componente Todo para mostrar contenido en el div root
ReactDOM.render(
  // render the TodoList component, don't need to pass anything because everything is set up on the constructor
  <TodoList />,
  document.getElementById('root')
)
