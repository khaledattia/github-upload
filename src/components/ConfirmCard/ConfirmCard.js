import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ConfirmCard.module.css';
import { removeTask } from '@store/tasks/tasks.actions';
import { togglePopupWindow } from '@store/ui/ui.actions';

export const ConfirmCard = ({ taskId }) => {
    const { card, btns, danger} = styles;
    const dispatch = useDispatch();
    const isWindowOpened = useSelector(state => state.ui.popupWindow);


    // handle popup Window
    useEffect(() => {
        console.log(isWindowOpened)

        const handleMouse = ({ target }) => {

                const card = document.querySelector("#popupCard");

                let isTheClickOnCard = card && card.contains( target );
                if( !isTheClickOnCard ){ 
                    
                    dispatch( togglePopupWindow( false ) ) 
                }
    

        }
        const hnadleKeyDown = ({ keyCode, key }) => {
            if(keyCode === 27 || key === 'Escape') {
                dispatch( togglePopupWindow( false ) ) 

            }

        }
        
        document.addEventListener("click", handleMouse)
        document.addEventListener("keydown", hnadleKeyDown)
        return () => {

            document.removeEventListener('click', handleMouse);

        }
    }, [ isWindowOpened, dispatch ]);


    const onDelete = () => {
        dispatch( removeTask( taskId ) );

    }


    return (
        <div id = "popupCard" className = { card } >
            <p>
                This will <span className = { danger }>permanently</span> 
                &nbsp;delete the task, Do you want to delete?
            </p>

            <div className = { btns }>

                <button className = '--button' 
                onClick={ onDelete }>Delete</button>
            
                <button className = '--button'
                onClick={ () => dispatch( togglePopupWindow(false) ) }> Cancel </button>
            
            </div>
        </div>
    );
};