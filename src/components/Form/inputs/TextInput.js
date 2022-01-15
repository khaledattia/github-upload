
import styles from "../Form.module.css";

export const TextInput = ( props ) =>{

    const { label, inputProps, errors } = props;
    const { inputWrapper, error } = styles;
    const isError = errors[ inputProps.name ] ? error : "";

    
    return (
        <div className = {`${ inputWrapper } ${ isError }`}>

            <label htmlFor = { inputProps.id }> 
                { label } 
            </label>

            <input { ...inputProps } />
            
            { 
                isError && 
                <div> { errors[inputProps.name] } </div> 
            }

        </div>
    );
};