
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { selectTaskById } from '@store/tasks/tasks.slice';
import { updateTask, fetchTasks } from '@store/tasks/tasks.actions';
import validatySchema from '@utils/constants/validatySchema.constants';
import { useForm } from "@utils/hooks/useForm";
import { useValidity } from "@utils/hooks/useValidity";

import { FormSkeleton } from '@components/Loaders';
import { Form } from "@components/Form/Form";
import { PageTitle } from "@components/PageTitle/PageTitle";
import  styles from "./EditTask.module.css";


export const EditTask = () => {
    const [{ task, setTask }, onChange] = useForm();
    const [ errors, hunter ] = useValidity();
    const { taskId } = useParams();
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const fetchingStatus = useSelector( state => state.tasks.fetchStatus );
    let result = useSelector( state => selectTaskById(state, taskId) )

    useEffect(() => {
            if(!result){
                navigate("/");
                
            }

            dispatch( fetchTasks() )
            setTask( result );

    }, [ dispatch, setTask, navigate, result]);

    const onEdit = (e) => {

        e.preventDefault()
        if( !hunter( validatySchema ,task )) {
            return;
        }


        dispatch( updateTask(task) );
        navigate(-1);
    }

    return (
        <div className={styles.pageLayout}>

            <PageTitle title = "Edit Task" />
            {   fetchingStatus === 'idle' ?
                <Form 
                errors       = { errors } 
                task         = { task }  
                handleValue  = { onChange } 
                onSubmit = { onEdit } /> :
                <FormSkeleton />
            }
        </div>
    );
};
