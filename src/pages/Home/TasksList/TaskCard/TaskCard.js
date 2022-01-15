import { useSelector } from 'react-redux';
import { selectTaskById } from '@store/tasks/tasks.slice'; 

import { Head } from './components/Head';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import styles from './TaskCard.module.css';

export const TaskCard = ({ taskId }) => {
    
    const task = useSelector( state => selectTaskById(state, taskId) );
    
    const { 
        id, 
        status, 
        title, 
        description, 
        user, 
        startDate, 
        endDate, 
        priority,
        createdDate,
        createdTime,
        modifiedDate,
        modifiedTime
    } = task;
    return (
        <div className = { styles.card }>

            <Head status = { status } id = { id } />

            <Body 
            description = { description } 
            id          = { id }
            user        = { user } 
            title       = { title }
            startDate   = { startDate } 
            endDate     = { endDate } 
            priority    = { priority } />

            <Footer 
                createdDate  = { createdDate }
                createdTime  = { createdTime }
                modifiedDate = { modifiedDate || "" }
                modifiedTime = { modifiedTime || ""}
            />
            
        </div>
    )
}