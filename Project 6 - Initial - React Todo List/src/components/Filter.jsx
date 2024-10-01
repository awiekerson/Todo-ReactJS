import classes from './Filter.module.scss';

function Filter() {

    return (
    <>
        <div className={classes.filters}>
            <div>
                <p>Filter by state</p>
                <div className={classes.badges}>
                    <div className={`${classes.badge} ${classes.selected}`}>
                        To-Do
                    </div>
                    <div className={classes.badge}>
                        Done
                    </div>
                    <span className={classes.clear}>
                        x clear
                    </span>
                </div>
            </div>
        </div>
    </>
    )
  }
  
  export default Filter