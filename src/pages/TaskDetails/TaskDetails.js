import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// store
import { selectTaskById } from '@store/tasks/tasks.slice';
import { togglePopupWindow } from '@store/ui/ui.actions';

// components
import { 
Requirments, 
ActionsSkeleton, 
TitleSkeleton, 
DescriptionSkeleton}  from '@components/Loaders';
import { enableTextFormat } from '@utils/helpers/text.helpers';
import { PieceOfData } from '@components/PieceOfData/PieceOfData';
import { PopUpWindow } from '@components/PopUpWindow/PopUpWindow';
import { ConfirmCard } from '@components/ConfirmCard/ConfirmCard'
import { Actions }  from './components/Actions';
// styles
import { FiUser, FiPlayCircle, FiCheck } from 'react-icons/fi';
import { GrSort } from 'react-icons/gr';
import styles from './TaskDetails.module.css';

export const TaskDetails = () => {
    const { taskId } = useParams();
    const navigate = useNavigate();
    let P = useRef(null);
    const toggle = useSelector(state => state.ui.popupWindow);
    
    const fetchStatus = useSelector( state => state.tasks.fetchStatus )
    const task = useSelector( state => selectTaskById(state, taskId) )
    const dispatch = useDispatch();

    useEffect(() => {
        // redirect if the task not exsit
        if( fetchStatus === 'idle' && !task ){
            
            navigate("/");

            return;
        }

        if(task){
            
            P.current.innerHTML =  enableTextFormat( task.description );
        }

        // make sure that the popup menu closed
        return () => {
            dispatch( togglePopupWindow( false ) )
        }
    }, [ fetchStatus, task, navigate, dispatch ]);


    
    const Edit = () => {
        navigate("/edit/" + task.id);
    }

    
    
    return (
        <>
        
            
            <div className = { styles.task_details }>
                <div className = { styles.actions }>
                
                    { 
                        !task  ? <ActionsSkeleton /> : 
                        <Actions 
                        edit         = { Edit }
                        createdDate  = { task.createdDate } 
                        createdTime  = { task.createdTime } 
                        modifiedDate = { task.modifiedDate }
                        modifiedTime = { task.modifiedTime } /> 

                        

                    }
                </div> 

                <div className = { styles.requirments }>

                    {
                        !task ? <Requirments /> :
                        <>
                            <PieceOfData 
                            clip = { task.user } 
                            icon = { <FiUser /> }/>

                            <PieceOfData 
                            clip = { task.startDate || "anytime" } 
                            icon = { <FiPlayCircle /> }/>

                            <PieceOfData 
                            clip = { task.endDate || "anytime"  } 
                            icon = { <FiCheck /> } />

                            <PieceOfData
                            className = { task.priority } 
                            clip = { task.priority } 
                            icon = { <GrSort /> } />
                        </>
                        
                    }
                </div>

                <div className = { styles.task_head_Line } >

                    { 
                        !task ? <TitleSkeleton /> : <h3> {task.title } </h3> 
                    }
                    
                </div>

                <div className = { styles.task_description } >

                    {
                        !task ? 
                        <DescriptionSkeleton /> :
                        <p ref = { P }></p>
                    }
                    
                </div>
            </div>

            {
                toggle ? 
                <PopUpWindow >
                    <ConfirmCard taskId = { taskId } />
                </PopUpWindow> : null
            }
        </>
    );
};
