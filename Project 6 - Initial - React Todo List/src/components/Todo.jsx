import classes from './Todo.module.scss';
import { useContext } from 'react';
import { TodosContext } from '../TodosContext';


function Todo({todo}) {

const store = useContext(TodosContext);

  return (
    <>
        <div className={`${classes.todo} ${todo.isDone ? classes.done : ''}`}>
            <button 
                onClick={() =>  store.dispatch({
                    type: 'deleted',
                    id: todo.id
                  })}
                className={classes.erase}>
                x erase</button>
            <h3>
                {todo.title}
            </h3>
            <p>
                {todo.description}
            </p>
            <div className={`${classes['task-check']}`}>
                <input 
                    onClick={() => store.dispatch({
                        type: 'toggledIsDone', 
                        id: todo.id
                      })}
                    type="checkbox" 
                    defaultChecked={todo.isDone} />
                <label>
                    {!todo.isDone ? 'To-Do' : 'Done'}
                </label>
            </div>
        </div>

    </>
  )
}

export default Todo