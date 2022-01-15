import  { Logo } from '@assets/Logo';
import styles from './NavBar.module.css';


export const NavBar = () => {

    return (
        <div className = { styles.navbar }>

            <Logo />
        
        </div>
    )
}