import { Option } from "./Option"
import styles from '../SelectInput.module.css';

export const Options = ({ options, optionProps }) => {

    return (
            options.length ?
                options.map( (item, i) => ( 
                <Option key = { i } item = { item } {...optionProps} />
            )) : 
            
            <li className = {`--text-center ${ styles.noResults }`}>Sorry, No Matching Options</li>
    )
}