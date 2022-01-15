
import { useDispatch } from "react-redux";

import { PieceOfData } from "@components/PieceOfData/PieceOfData";
import { time12Hour } from '@utils/helpers/date.helpers';

import { FiClock, FiCalendar } from 'react-icons/fi';
import styles from '../TaskDetails.module.css';

export const Actions = ( props ) => {
    
    const dispatch = useDispatch();
    const { 
        createdDate, 
        createdTime, 
        modifiedDate, 
        modifiedTime, 
        edit
    } = props;



    return (
        <>
            <div className = { styles.dates }>
                <div className = { styles.created } 
                style = {{ marginBottom: modifiedDate ? "0.75rem" : "0" }}>

                    <span style = {{ color: "#65735B" }}>created: </span>&nbsp;
                    <PieceOfData clip = { createdDate } 
                    icon = { <FiCalendar /> } />&nbsp;
                    <PieceOfData clip = { time12Hour(createdTime) }  
                    icon = { <FiClock /> } />&nbsp;

                </div>

                {
                    modifiedDate &&
                    <div className = { styles.modified }>

                        <span style = {{ color: "#65735B" }}>modified:</span>&nbsp;
                        <PieceOfData clip = { modifiedDate } icon = { <FiCalendar /> } />&nbsp;
                        <PieceOfData clip = { time12Hour(modifiedTime) }  icon = { <FiClock /> } />&nbsp;
                    
                    </div>
                }
            </div>

            <div className = { styles.btns } >
                <button  
                onClick={ () => dispatch({ type:"ui/popupWindowChnaged" , payload: true }) }
                className = "--button" >
                    Delete
                </button>

                <button 
                onClick={ edit }
                className = "--button" >
                    Edit
                </button>
            </div>
        </>

    );
};