import { useState } from "react";

export const useValidity = () => {

    const [errors, setErrors] = useState({});

    const checkValidation = (checkerPattern, taskData) => {
        let simulateErrorsState = {};

        for(let key in checkerPattern ) {
            let isRequired = checkerPattern[key].required;
            let isRegex = checkerPattern[key].regex;

            if ( isRequired ) {
                if (taskData[key].trim()) {
                    if ( isRegex ) {
                        if(!isRegex.test(taskData[key])) {
                            simulateErrorsState[key] = "please make sure you entered the data correctly"
                        };
                    };
                } else {

                    simulateErrorsState[key] = 'this field is required!';
                };

            };
        };

        setErrors({...simulateErrorsState});

        if(Object.keys(simulateErrorsState).length){
            return false;
        }

        return true;
    };

    return [errors, checkValidation]

}