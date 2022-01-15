import { PieceOfData } from '@components/PieceOfData/PieceOfData';
import { time12Hour } from '@utils/helpers/date.helpers';
import { FiCalendar } from 'react-icons/fi'
import { FiClock } from 'react-icons/fi'
import styles from '../TaskCard.module.css';

export const Footer = ( props ) => {
    const {
        createdDate,
        createdTime,
        modifiedDate,
        modifiedTime,
    } = props

    return (
        <div className = { styles.footer }>
            <div className = { styles.leftFloat }>

                <PieceOfData icon = { <FiCalendar /> } 
                clip = { createdDate } />

                <PieceOfData icon = { <FiClock /> }    
                clip = { time12Hour(createdTime) } />
                
            </div>

           { 
                modifiedDate ?  
                <div className = {styles.rightFloat}>
                        
                    <PieceOfData revers = {true}  
                    icon = { <FiCalendar /> } 
                    clip = { modifiedDate } />

                    <PieceOfData revers = {true}  
                    icon = { <FiClock /> }    
                    clip = { time12Hour(modifiedTime) } />

                </div> : 
                null
            }
        </div>
    )
}