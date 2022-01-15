import { Link } from "react-router-dom";
import { Badge } from '@components/Badge/Badge';
import styles from '../TaskCard.module.css';

export const Head = ({ status, id }) => {
    const idStyle = {
        fontSize: "0.75rem", 
        color: "#172B4D", 
        fontWeight: "600"
    }

    return (
        <Link to ={`task/${ id }`}>
    
            <div className = {styles.head}>

                <span 
                className = { styles.leftFloat } 
                style = { idStyle }>ID: {id} </span>
                
                <div className = { `${styles.rightFloat} ${styles[status.replace(/\s/g, '')]}` }>
                    <Badge status = { status }/>
                </div>
                
            </div>
        </Link>
    );
};