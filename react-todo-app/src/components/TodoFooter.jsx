import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/css/todo-footer.css';

function TodoFooter(props) {
  const {
    filter,
    filterTodos,
    clearTodos,
    itemsLeft,
  } = props;

  function handleClick({ target: { name } }) {
    if (name === 'button-all' && filter !== 'all') {
      filterTodos('all');
    } else if (name === 'button-active' && filter !== 'active') {
      filterTodos('active');
    } else if (name === 'button-completed' && filter !== 'completed') {
      filterTodos('completed');
    } else if (name === 'button-clear') {
      clearTodos();
    }
  }

  const numberItemsLeft = itemsLeft();

  return (
    <footer className={styles.footer}>
      <p>
        {numberItemsLeft === 1
          ? `${numberItemsLeft} item left`
          : `${numberItemsLeft} items left`}
      </p>
      <ul>
        <li
          onClick={handleClick}
          className={filter === 'all' ? styles.activeButton : ''}
        >
          <button type="button" name="button-all">
            All
          </button>
        </li>
        <li
          onClick={handleClick}
          className={filter === 'active' ? styles.activeButton : ''}
        >
          <button type="button" name="button-active">
            Active
          </button>
        </li>
        <li
          onClick={handleClick}
          className={filter === 'completed' ? styles.activeButton : ''}
        >
          <button type="button" name="button-completed">
            Completed
          </button>
        </li>
      </ul>
      <button type="button" name="button-clear" onClick={handleClick}>
        Clear all
      </button>
    </footer>
  );
}

TodoFooter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterTodos: PropTypes.func.isRequired,
  clearTodos: PropTypes.func.isRequired,
  itemsLeft: PropTypes.func.isRequired,
};

export default TodoFooter;
