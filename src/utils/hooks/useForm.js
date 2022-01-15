import { useState, useLayoutEffect } from 'react';
const init = {
    title: "",
    startDate: "",
    endDate: "",
    priority: "",
    user: "",
    status: "",
    description: "",
}
export const useForm = ( initialState ) => {

    const [task, setTask] = useState(init);

    

    // extract all the form inputs
    // return object {[inputName]: [Value], etc.. }
    useLayoutEffect(() => {

        let inputs = document.querySelectorAll(".form--input");
        let allFormInputs = [...inputs];

        let formStructure = {};
        allFormInputs.forEach(node => {
            let key = node.name;
            let value = node.value;
            formStructure[key] = value;
        });


        if(initialState) {
            setTask(initialState);
            return;
        }

        setTask(formStructure);
    }, [setTask, initialState]);


    const handleValue = (e) => {
        let value = e.target.value;
        let key = e.target.name;

        let taskCopy = {...task};

        taskCopy[key] = value;

        setTask({...taskCopy})
    }

    return [{task, setTask}, handleValue];
};