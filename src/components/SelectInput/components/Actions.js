import { FiX } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
import styles from '../SelectInput.module.css';

export const Actions = ( props ) => {
    const { clearValue, value, focus, millSecDuration, elementRef } = props
    const angelIconStyle = {
        transform: focus ? "rotate(0deg)": "rotate(180deg)", 
        transition: millSecDuration + "ms",
        display: "block",
    }
    const { _timesIcon, _angelIcon, _value, _animate } = styles; 

    return (
        <div className = "Group_of_Actions">

            { // ( Icon Button ) close the list 
                value && 
                !focus && 
                <span className = { _timesIcon } onClick = { () => clearValue(() => '') }>
                    <FiX />
                </span> 
            }

            <span className = { _angelIcon} >
                <span style = { angelIconStyle }>
                    <FiChevronUp />
                </span>
            </span>

            <span 
            className = {`${ _value } ${ focus ? _animate : "" }`} 
            style     = {{ transitionDuration: `${ millSecDuration }ms `}}
            ref       = { elementRef }>
                { value }
            </span>

        </div>  
    )
}