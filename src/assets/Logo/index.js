


import { Link } from 'react-router-dom';
import styles from './Logo.module.css'

export const Logo  = () => {

    const { logo, green } = styles;

    return (
        <div style = {{ display: "flex" }}>
            <Link to = "/">

                <div className     = { logo }>
                    <div className = "--text-uppercase"> on track </div>
                    <div className = "--text-capitalize">
                        turn your &nbsp;
                        <span className = { green }> plan ON </span>
                    </div>
                </div>

            </Link>
        </div>
    )
}  