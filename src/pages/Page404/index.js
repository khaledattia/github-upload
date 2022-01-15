import { Link } from 'react-router-dom';
import Page_Not_Found from '@assets/Page_Not_Found.png';
import styles from './Page404.module.css';

export const Page404 = () => {

    const { container, image_wrapper, number, text} = styles;

    return(
        <div className = { container } >
            <p className = { number }>404</p>
            <p className = { text }>The page is not found!</p>

                <Link to = '/'>
                    Back Home
                </Link>
            
            <div className = { image_wrapper } >
                <img src = { Page_Not_Found } alt = "Page Not Found"/>
            </div>
        </div>
    );
}