
import styles from './PopUpWindow.module.css';


export const PopUpWindow = ({ children }) => {

    const { popup_window } = styles;


    return (
        <div className = { popup_window } >
            { children }
        </div>
    );
};