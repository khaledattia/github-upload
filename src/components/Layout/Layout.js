import styles from './Layout.module.css';

export const Layout = ({ children }) => {

    const { container } = styles;
    return (
        <div className = { container }>
            { children }
        </div>
    )
}