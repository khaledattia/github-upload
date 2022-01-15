import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useForm } from '@utils/hooks/useForm';
import { useValidity } from '@utils/hooks/useValidity';
import validatySchema from '@utils/constants/validatySchema.constants';
import { addTask } from '@store/tasks/tasks.actions';

import { Form } from '@components/Form/Form';
import { PageTitle } from '@components/PageTitle/PageTitle';

import styles  from './NewTask.module.css';


export const NewTask = () => {
    const [ { task } ,onChange] = useForm();
    const [errors, isValid] = useValidity();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        if(!isValid(validatySchema, task)){
            return;
        }
        
        dispatch( addTask( task, navigate ) );
    }

    return (
        <div className={styles.pageLayout}>
            <PageTitle title = "Create New Task" />
            <Form 
            errors      = { errors } 
            task        = { task } 
            onSubmit    = { submit } 
            handleValue = { onChange } />
            
        </div>
    );
};
