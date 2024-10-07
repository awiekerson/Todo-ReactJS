import classes from './Filter.module.scss';
import { useTodos } from '../TodosContext.jsx';


function Filter() {

    const store = useTodos();

    return (
    <>
        <div className={classes.filters}>
            <div>
                <p>Filter by state</p>
                <div className={classes.badges}>
                    <div 
                    className={`${classes.badge} ${store.filterBy === 'todo' ? classes.selected : ''}`}
                    onClick={() => {store.setFilterBy('todo')}}>
                        To-Do
                    </div>
                    <div className={`${classes.badge} ${store.filterBy === 'done' ? classes.selected : ''}`}
                    onClick={() => {store.setFilterBy('done')}}>
                        Done
                    </div>
                    {
                        store.filterBy && 
                        <span className={classes.clear}
                        onClick={() => {store.setFilterBy('')}}>
                            
                            x clear
                        </span>
                    }
                </div>
            </div>
        </div>
    </>
    )
  }
  
  export default Filter