import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../assets/svg/close-icon.svg';
import styles from '../assets/css/todo-item.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    const { todo } = this.props;

    this.state = {
      todoEdited: todo,
      isTodoBeingEdited: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitTodoEdited = this.submitTodoEdited.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleCheckTodo = this.handleCheckTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    const { isTodoBeingEdited } = this.state;

    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (isTodoBeingEdited) {
        this.submitTodoEdited({ key: 'Enter' });
      }
    }
  }

  handleCheckTodo() {
    const { id, isCompleted, changeTodo } = this.props;
    changeTodo(id, 'isCompleted', !isCompleted);
  }

  handleRemoveTodo() {
    const { id, removeTodo } = this.props;
    removeTodo(id);
  }

  handleChange({ target: { value } }) {
    this.setState({ todoEdited: value });
  }

  submitTodoEdited(event) {
    if (event.key === 'Enter') {
      const { todoEdited } = this.state;
      const { id, todo, changeTodo } = this.props;

      if (todoEdited.trim().length === 0) {
        this.setState({ todoEdited: todo, isTodoBeingEdited: false });
      } else {
        changeTodo(id, 'todo', todoEdited);
        this.setState({ isTodoBeingEdited: false });
      }
    }
  }

  handleDoubleClick() {
    const { isTodoBeingEdited } = this.state;

    if (!isTodoBeingEdited) {
      this.setState({ isTodoBeingEdited: true });
    }
  }

  render() {
    const { isTodoBeingEdited, todoEdited } = this.state;
    const { todo, isCompleted } = this.props;

    return (
      <li
        className={styles.todoItem}
        onDoubleClick={this.handleDoubleClick}
      >
        <input
          type="checkbox"
          name="todo-check"
          style={{ display: 'none' }}
          onChange={this.handleChange}
        />
        <span
          onClick={this.handleCheckTodo}
          className={
            isCompleted ? styles.todoCheckmarked : styles.todoCheckmark
          }
        />
        {isTodoBeingEdited && !isCompleted ? (
          <input
            type="text"
            autoFocus
            name="todo-edited"
            onChange={this.handleChange}
            onKeyPress={this.submitTodoEdited}
            value={todo !== todoEdited ? todoEdited : todo}
            className={styles.todoEdited}
            ref={this.setWrapperRef}
          />
        ) : (
          <p className={isCompleted ? styles.todoCompleted : styles.todo}>
            {todo}
          </p>
        )}
        <div className={styles.todoCloseIcon}>
          <img
            src={CloseIcon}
            alt=""
            width={27}
            onClick={this.handleRemoveTodo}
          />
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  todo: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  changeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
