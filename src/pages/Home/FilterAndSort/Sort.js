import { useSelector, useDispatch } from 'react-redux';

import { selectTasksIds } from '@store/tasks/tasks.slice';
import { sortBy } from '@store/sort/sort.actions';
import { SelectInput } from '@components/SelectInput';

import { FiRss } from 'react-icons/fi';
import styles from './FilterAndSort.module.css';



export const Sort = () => {
    const dispatch = useDispatch();
    const sort = useSelector(state => state.sort);
    const filter = useSelector(state => state.filter);
    const count = useSelector( selectTasksIds ).length;


    const onChange = e => { dispatch( sortBy(e.target.value) ) }

    const sortOptions = [
        "priority",
        "status",
        "modified date"
    ];

    return  (
        <div className     = { styles.sort }>
            <div className = { styles.sortContainer }>

                
                
                <div>

                    <div className = { styles.h5 }>
                        { filter } <span>tasks</span>
                    </div>

                    
                    <div className = {`${ styles.FiRss } ${ styles.FiRssWide }`}>
                        <FiRss />
                        <span style = {{ marginLeft: "0.5rem" }}>
                            <strong style = {{ marginRight: "0.376rem" }}> { count } </strong> 
                            task{ count < 2 ? "" : "s" } found
                        </span>
                    </div>
                </div>


                
                <div className={ styles.wrapper__ }>
                    <SelectInput 
                    inputOptions = { sortOptions } 
                    onChange = { onChange } 
                    value = { sort } />
                
                    <div className = {`${ styles.FiRss } ${ styles.FiRssMoblie }`}>
                        <FiRss />
                        <span style = {{ marginLeft: "0.5rem" }}>
                            <strong style = {{ marginRight: "0.376rem" }}> { count } </strong> 
                            task{ count < 2 ? "" : "s" } found
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}