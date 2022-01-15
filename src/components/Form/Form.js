import { useSelector } from 'react-redux';

import { Spinner } from '@components/Loaders';
import { TextInput } from './inputs/TextInput';
import { Select } from './inputs/Select';
import { Textarea } from './inputs/Textarea';

import styles from './Form.module.css';



export const Form = ( props ) => {

    const { task, onSubmit, handleValue, errors } = props;
    const isPosted = useSelector(state => state.tasks.postStatus);

    // props passed down to the input itself
    // input properties like: name, type, placeholder, etc..
    const titleProp = {
        name: "title", 
        id:"TaskTitle", 
        type: "text", 
        className: "form--input",
        onChange: handleValue,
        value:  task.title 
    }
    const endDateProp = {
        name: "endDate", 
        id:"endDate", 
        type: "date", 
        className: "form--input",
        onChange: handleValue,
        value:  task.endDate 
    }
    const startDateProp = { 
        name: "startDate", 
        id:"startDate", 
        type: "date", 
        className: "form--input",
        onChange: handleValue,
        value:  task.startDate 
    }
    const priorityProp = {
        name: "priority", 
        type: "text", 
        className: "form--input",
        id: "priority", 
        autoComplete: "off"
    }
    const userProp = {
        name: "user", 
        id: "user", 
        className: "form--input",
        autoComplete: "off"
    }
    const descriptionProps = {
        name: "description", 
        id: "description", 
        autoComplete: "off", 
        onChange: handleValue, 
        className: "form--input",
        value: task.description
    } 
    const statusProps = {
        name: "status", 
        id: "status", 
        className: "form--input",
        autoComplete: "off"
    }

    
    /* 
      - constant options for select input 
        Note: in userOptions case data will be fetched 
        from the server when the form is loaded 
    */
    const priorityOptions = [
        'high',
        'medium',
        'normal',
        'low',
    ]
    const usersOptions = [
        'khaled',
        "amgad",
        "Huda",
        "tarek",
        
    ]
    const statusOptions = [
        'todo',
        "in progress",
        "done",
    ]


    return (
        <form className={ styles.form } onSubmit = { onSubmit }>

            <TextInput 
            label      = "Title" 
            errors     = { errors }
            inputProps = { titleProp } />

            <div className = { styles.dates }>

                <TextInput 
                errors     = { errors } 
                label      = "Start Date" 
                inputProps = { startDateProp } />
                
                <TextInput 
                errors     = { errors } 
                label      = "End Date" 
                inputProps = { endDateProp } />
            
            </div>

            <Select 
            errors     = { errors } 
            options    = { priorityOptions } 
            value      = { task.priority } 
            label      = "Priority" 
            inputProps = { priorityProp } 
            onChange   = { handleValue } />
            
            <Select 
            errors     = { errors } 
            options    = { usersOptions } 
            value      = { task.user } 
            label      = "User" 
            inputProps = { userProp } 
            onChange   = { handleValue }/>
            
            <Select 
            errors     = { errors } 
            options    = { statusOptions } 
            value      = { task.status } 
            label      = "Status" 
            inputProps = { statusProps } 
            onChange   = { handleValue }/>
            
            <Textarea 
            errors     = { errors } 
            label      = "Description" 
            inputProps = { descriptionProps } />

            <button disabled = { isPosted !== "idle" } 
            className = "--button"
            style = {{ display: "flex" }}>
                {
                    isPosted === "idle"?  
                    "submit" : "submitting.. "
                }

                { 
                    // on ( Post OR Put ) LOADER...
                    isPosted !== "idle" && 
                    <Spinner className = { styles.loader } />
                }   
            </button>

            

        </form>
    )
}