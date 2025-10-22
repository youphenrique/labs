import React from 'react';
import Todo from './components/Todo';
import styles from './assets/css/app.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>todos</h1>
      <Todo />
      <div className={styles.info}>
        <p>Double-click to edit a todo</p>
        <p>
          Created by {' '}
          <a href="https://github.com/phenrique7/">phenrique7</a>
        </p>
      </div>
    </div>
  );
}

export default App;
