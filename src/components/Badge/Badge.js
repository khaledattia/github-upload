


import styles from './Badge.module.css';


export const Badge = ( { status = "todo" } ) => {

    const { badge } = styles
    
    return (
        <span className = { badge }> { status } </span>
    )
}