import { getDateAndTime } from "@utils/helpers/date.helpers";

export const addTask = ( task, navigate ) => {
    return async ( dispatch, state ) => {
        
        dispatch({ type: 'tasks/postStatusChanged', payload: "loading" });

        // Fake Request
        setTimeout(() => {
            // send POST Request to the server async action
            // and get the task back as a response
            
            let response = { task: createId(task) };
            dispatch({ type: 'tasks/tasksAdded', payload: response.task });
            dispatch({ type: 'tasks/postStatusChanged', payload: "idle" });
            navigate("/");
        }, 1000);
    };
};

export const removeTask = ( id ) => {
    return async ( dispatch ) => {

        dispatch({ type: 'tasks/deleteStatusChanged', payload: "loading" });

        // send DELETE Request to the server for updating the task
        // and get the id back response
        let response = { id };
        dispatch({ type: 'tasks/tasksRemoved', payload: response.id });
        dispatch({ type: 'tasks/deleteStatusChanged', payload: "idle" });
    };
};

export const updateTask = ( task ) => {
    return async ( dispatch ) => {

        dispatch({ type: 'tasks/putStatusChanged', payload: "loading" });
        
        // send PUT Request to the server to update the Task
        // and get the the new task back response
        let response = { task: modifiedDate( task ) };
        dispatch({type:'tasks/tasksUpdated', payload: response.task});
        dispatch({ type: 'tasks/putStatusChanged', payload: "idle" });
    };
};

export const fetchTasks = () => {

    return ( dispatch ) => {
            
        dispatch({ type: 'tasks/fetchStatusChanged', payload: "loading" });

        // Fake Request
        setTimeout(() => {
            // send POST Request to the server async action
            // and get the task back as a response
            
            // let response = { tasks };
            // dispatch({ type: 'tasks/tasksLoaded', payload: response.tasks });
            dispatch({ type: 'tasks/fetchStatusChanged', payload: "idle" });
        }, 1500);

    };
}

const createId = ( task ) => {

    const { date, time } = getDateAndTime();

    task.createdDate = date;
    task.createdTime = time;
    task.id = `${date}${time}`.replace(/[-:\s]/g, "");

    return task;
}

const modifiedDate = ( task ) => {
    const { date, time } = getDateAndTime();

    task.modifiedDate = date;
    task.modifiedTime = time;
    return task
} 


// const tasks = {
    
//         "0101202207535249": {
//             createdDate: "01-01-2022",
//             createdTime: "07:53:52:49",
//             description: "qwe",
//             endDate: "",
//             id: "0101202207535249",
//             priority: "high",
//             startDate: "",
//             status: "todo",
//             title: "qwe",
//             user: "khaled"
//         },
//         "01012022075409746": {
//             createdDate: "01-01-2022",
//             createdTime: "07:54:09:746",
//             description: "asd",
//             endDate: "",
//             id: "01012022075409746",
//             priority: "medium",
//             startDate: "",
//             status: "in progress",
//             title: "asd",
//             user: "amgad"
//         }
// }