import { SelectInput } from "@components/SelectInput";
import styles from '../Form.module.css';



export const Select = ( props ) => {
    
    const { label, inputProps, onChange, value, options, errors } = props;
    const { inputWrapper, error } = styles;
    const isError = errors[ inputProps.name ] ? error : ""


    return (
        <div className = {`${ inputWrapper } ${ isError }`}>

            <label htmlFor = { inputProps.id }>
                { label } 
            </label> 

            <SelectInput 
            inputOptions = { options } 
            inputProps   = { inputProps }  
            onChange     = { onChange } 
            value        = { value }/>
            
            { 
                isError && 
                <div> { errors[inputProps.name] } </div> 
            }

        </div>
    );
};