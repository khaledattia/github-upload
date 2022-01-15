

import { Link } from 'react-router-dom';
import styles from './IconButton.module.css';


export const IconButton = () => {
    
    const { plusIcon, plus, label } = styles;



    return (
        <Link to = "/newtask/#">

            <div className = { plusIcon } >

                <span  className = { plus }> + </span>
                <label className = { label }> New Task </label>
            
            </div>
        
        </Link>
    )
}