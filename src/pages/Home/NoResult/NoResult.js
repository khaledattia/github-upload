import { Link } from "react-router-dom"
import styles from './NoResult.module.css';
import GIF from '@assets/No_Results.gif';
export const NoResults = () => {
    return (
        <div className={ styles.noResults }>
            
            <div className="my-3">
                <p>Ooops, No tasks found!</p>
                <p>
                    <Link to="/newtask">
                        <span>Add tasks</span>
                    </Link>
                    , Get things done and rock the world!
                </p>
            </div>

            <div className = { styles['image-container'] }>
                <img style = {{ width: "100%" }} 
                src = { GIF }
                alt = "no results"/>
            </div>

        </div>
    )
}