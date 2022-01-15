import { useSelector } from 'react-redux';

import { selectTasksIds } from '@store/tasks/tasks.slice';
import { TaskCard } from "./TaskCard/TaskCard"
import { NoResults } from '../NoResult/NoResult';

export const TasksList = () => {
    const tasksIds = useSelector( selectTasksIds );
    const bottomtimelineLabelStyle = {
        textTransform: "capitalize",
        color: "#C4C4C4",
        paddingBottom: "1.5rem",
        textAlign: "center",
        fontWeight: "600",
        pointerEvents: "none"
    }
    return (
        <div className = "sort-cards-wrapper">
            { 
                tasksIds.length ? 
                <>
                    {tasksIds.map( 
                        (id, i) => <TaskCard key = { i } taskId = { id } /> 
                    )}
                    
                    <div style = { bottomtimelineLabelStyle }>End Of Tasks</div>
                </> : 
                <NoResults />
            }
        </div>
    )
}