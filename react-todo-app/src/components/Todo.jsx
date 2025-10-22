import React from 'react';
import shortid from 'shortid';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import {
  getItemStorage,
  immutableRemoveObjectProperty,
  isEmptyObject,
  removeItemStorage,
  setItemStorage,
} from '../utils';
import styles from '../assets/css/todo.css';

class Todo extends React.Component {
  static areAllTodosChecked(todos) {
    const todosArray = Object.values(todos);
    let todosChecked = 0;

    todosArray.forEach((todo) => {
      if (todo.isCompleted) {
        todosChecked += 1;
      }
    });

    return todosArray.length === todosChecked;
  }

  constructor(props) {
    super(props);

    this.filter = 'all';
    this.checked = false;
    this.allTodos = {};

    const storagedTodos = getItemStorage('todos');

    this.state = {
      todo: '',
      todos: storagedTodos ? JSON.parse(storagedTodos) : {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkAllTodos = this.checkAllTodos.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.filterTodos = this.filterTodos.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
    this.itemsLeft = this.itemsLeft.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.filter !== 'all') {
      const storagedTodos = getItemStorage('todos');
      const stringifyedTodos = JSON.stringify(this.allTodos);

      if (storagedTodos) {
        if (stringifyedTodos !== storagedTodos) {
          setItemStorage('todos', stringifyedTodos);
        }
      } else {
        setItemStorage('todos', stringifyedTodos);
      }
    } else {
      const { todos } = this.state;
      const stringifyedTodos = JSON.stringify(todos);
      const StringifyedPrevTodos = JSON.stringify(prevState.todos);

      if (stringifyedTodos !== StringifyedPrevTodos) {
        setItemStorage('todos', stringifyedTodos);
      }
    }
  }

  componentWillUnmount() {
    removeItemStorage('todos');
  }

  handleChange({ target: { value } }) {
    this.setState({ todo: value });
  }

  checkAllTodos() {
    const { todos } = this.state;

    if (this.filter !== 'all') {
      const todosKeys = Object.keys(todos);

      if (Todo.areAllTodosChecked(todos)) {
        this.checked = false;

        todosKeys.forEach((todoKey) => {
          this.allTodos[todoKey] = {
            ...todos[todoKey],
            isCompleted: false,
          };
        });
      } else {
        this.checked = true;

        todosKeys.forEach((todoKey) => {
          this.allTodos[todoKey] = {
            ...todos[todoKey],
            isCompleted: true,
          };
        });
      }

      this.setState({ todos: {} });
    } else {
      const checkedTodos = {};
      const todosKeys = Object.keys(todos);

      todosKeys.forEach((todoKey) => {
        checkedTodos[todoKey] = {
          ...todos[todoKey],
          isCompleted: !this.checked,
        };
      });

      this.checked = !this.checked;
      this.setState({ todos: checkedTodos });
    }
  }

  submitTodo(event) {
    const { todo } = this.state;

    if (event.key === 'Enter' && todo.trim().length > 0) {
      const todoId = shortid.generate();

      if (this.filter !== 'all') {
        this.allTodos = {
          ...this.allTodos,
          [todoId]: { id: todoId, todo, isCompleted: false },
        };

        this.filterTodos(this.filter);
      } else {
        this.checked = false;

        this.setState(state => ({
          todo: '',
          todos: {
            ...state.todos,
            [todoId]: { id: todoId, todo, isCompleted: false },
          },
        }));
      }
    }
  }

  changeTodo(todoId, property, value) {
    if (this.filter !== 'all' && property === 'isCompleted') {
      this.allTodos = {
        ...this.allTodos,
        [todoId]: { ...this.allTodos[todoId], [property]: value },
      };

      this.filterTodos(this.filter);
    } else {
      const { todos } = this.state;
      const changedTodos = {
        ...todos,
        [todoId]: { ...todos[todoId], [property]: value },
      };

      if (Todo.areAllTodosChecked(changedTodos)) {
        this.checked = true;
      } else if (this.checked) {
        this.checked = false;
      }

      this.setState({ todos: changedTodos });
    }
  }

  removeTodo(todoId) {
    if (this.filter !== 'all') {
      this.allTodos = immutableRemoveObjectProperty(this.allTodos, todoId);
      this.filterTodos(this.filter);
    } else {
      const { todos } = this.state;
      const changedTodos = immutableRemoveObjectProperty(todos, todoId);

      if (Todo.areAllTodosChecked(changedTodos)) {
        this.checked = true;
      }

      this.setState({ todos: changedTodos });
    }
  }

  filterTodos(filter) {
    if (this.filter === 'all') {
      const { todos } = this.state;
      this.allTodos = Object.assign({}, todos);
    }

    this.filter = filter;

    if (filter === 'all') {
      if (Todo.areAllTodosChecked(this.allTodos)) {
        this.checked = true;
      } else if (this.checked) {
        this.checked = false;
      }

      this.setState({
        todos: Object.assign({}, this.allTodos),
      });

      this.allTodos = {};
    } else {
      const filteredTodos = {};

      if (filter === 'active') {
        Object.values(this.allTodos).forEach((todo) => {
          if (!todo.isCompleted) {
            filteredTodos[todo.id] = Object.assign({}, todo);
          }
        });
      } else if (filter === 'completed') {
        Object.values(this.allTodos).forEach((todo) => {
          if (todo.isCompleted) {
            filteredTodos[todo.id] = Object.assign({}, todo);
          }
        });
      }

      if (Todo.areAllTodosChecked(filteredTodos)) {
        this.checked = true;
      } else if (this.checked) {
        this.checked = false;
      }

      this.setState({ todo: '', todos: filteredTodos });
    }
  }

  clearTodos() {
    if (this.filter !== 'all') {
      const { todos } = this.state;

      Object.keys(todos).forEach((todoKey) => {
        this.allTodos = immutableRemoveObjectProperty(
          this.allTodos,
          todoKey,
        );
      });
    }

    this.setState({ todos: {} });
  }

  itemsLeft() {
    let todosArray;

    if (isEmptyObject(this.allTodos)) {
      const { todos } = this.state;
      todosArray = Object.values(todos);
    } else {
      todosArray = Object.values(this.allTodos);
    }

    let numberCompletedTodos = 0;

    todosArray.forEach((todo) => {
      if (todo.isCompleted) {
        numberCompletedTodos += 1;
      }
    });

    return todosArray.length - numberCompletedTodos;
  }

  render() {
    const { todo, todos } = this.state;
    const todoList = Object.values(todos);

    return (
      <section className={styles.todoApp}>
        {todoList.length > 0 && (
          <span
            className={this.checked ? styles.todosChecked : styles.checkAll}
            onClick={this.checkAllTodos}
          />
        )}
        <input
          type="text"
          className={styles.todoInput}
          placeholder="What needs to be done?"
          onChange={this.handleChange}
          onKeyPress={this.submitTodo}
          value={todo}
        />
        {(todoList.length > 0 || this.filter !== 'all') && (
          <>
            <ul className={styles.todoList}>
              {todoList.map(todoItem => (
                <TodoItem
                  key={todoItem.id}
                  id={todoItem.id}
                  todo={todoItem.todo}
                  isCompleted={todoItem.isCompleted}
                  changeTodo={this.changeTodo}
                  removeTodo={this.removeTodo}
                />
              ))}
            </ul>
            <TodoFooter
              filter={this.filter}
              filterTodos={this.filterTodos}
              clearTodos={this.clearTodos}
              itemsLeft={this.itemsLeft}
            />
          </>
        )}
      </section>
    );
  }
}

export default Todo;
