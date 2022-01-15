import { createSelector } from 'reselect';

const initialState =  {
    fetchStatus:"loading",
    putStatus:"idle",
    deleteStatus:"idle",
    postStatus:"idle",
    entities: {}
}

// ===== How ( Navgation Bar ) works ==== 
// -> select the title ( highlight the title )
// -> press (comand + f) on Mac - (ctrl + f) on PC
// -> hit return to visit the section
// -> finally to return back to the navigation
//    use the same visited section name
// =========== Navigation Bar ============
// 1. Reducer Slice Section
// 2. Handle Actions Section
// 3. Selectors Section

// you can use the same section name
// to return back to Navigation Bar 
// ---------------------------------
// 1. Reducer Slice Section
// ========================
const tasksReducer = (state = initialState, action) => {

    switch ( action.type ) {

        case "tasks/tasksLoaded":
            return {
                ...state,
                entities: tasksLoaded( action.payload )
            };

        case 'tasks/tasksAdded':
            return {
                ...state,
                entities: tasksAdded(state.entities, action.payload)
            };

        case 'tasks/tasksRemoved': 
            return {
                ...state,
                entities: tasksRemoved(state.entities, action.payload)
            };

        case 'tasks/tasksUpdated': 
            return {
                ...state,
                entities: tasksUpdated(state.entities, action.payload)
            };

        case 'tasks/putStatusChanged':
            return {
                ...state,
                putStatus: action.payload
            };

        case 'tasks/deleteStatusChanged':
            return {
                ...state,
                deleteStatus: action.payload
            };

        case 'tasks/postStatusChanged':
            return {
                ...state,
                postStatus: action.payload
            };

        case 'tasks/fetchStatusChanged':
            return {
                ...state,
                fetchStatus: action.payload
            };

        default:
            return state;
    }
}

export default tasksReducer;

// you can use the same section name
// to return back to Navigation Bar 
// -------------------------
// 2. Handle Actions Section
// =========================
const tasksAdded = ( entities, task ) => ( { ...entities, [task.id]: task } )

const tasksRemoved = ( entities, id ) => {
    let copy = {...entities}
    delete copy[id]
    return {...copy};
}

const tasksUpdated = ( entities, task ) => {
    return {...entities, [task.id]: task}
}

const tasksLoaded = ( entities ) => {
    return { ...entities }
}


// you can use the same section name
// to return back to Navigation Bar 
// --------------------
// 3. Selectors Section
// ====================
const selectEntities = state => state.tasks.entities;

export const selectTaskById = (state,id) => selectEntities(state)[id]

export const selectTasks = createSelector(
    selectEntities,
    entities => Object.values( entities )
)

const selectTasksFiltered = createSelector(
    selectTasks,
    state => state.filter,
    (tasks, filterStatus) => {
        if(filterStatus === "all") {
            return tasks
        }

        if(filterStatus === "active"){

            return tasks.filter(task => task.status !== "done")
        }

        return tasks.filter(task => task.status === filterStatus)
    }
)


const sortByStatus = (arr) => {
    return arr.sort((a, b) => {

        if(a.status < b.status) return -1
        else if(a.status > b.status) return 1
        else return 0
    
    });
};




const AZSort = (A, B) => {
    if(A < B) return -1
    else if(A > B) return 1
    else return 0
};

const ZASort = (A, B) => {
    if(A > B) return -1
    else if(A < B) return 1
    else return 0
};

const sortByCreatedTime = (arr) => {
    return arr.sort((a, b) => {

        return ZASort(a.createdTime, b.createdTime);
    
    });
};


const sortByModifiededTime = (arr) => {
    
    return arr.sort((a, b) => {
        let Acheck = a.modifiedDate && 
        (a.modifiedDate.replace(/-/g,"") 
        + a.modifiedTime.replace(/:/g,""));

        let Bcheck = b.modifiedDate && 
        (b.modifiedDate.replace(/-/g,"") 
        + b.modifiedTime.replace(/:/g,""));

        let A = Acheck ? Acheck : "0"
        let B = Bcheck ? Bcheck : "0"

        return ZASort(A, B);
    
    });
};

const sortByPriority = (arr) => {
    const priority = {
        high: 1,
        medium: 2,
        normal: 3,
        low: 4
    };
    return arr.sort((a, b) => {
        let A = priority[a.priority];
        let B = priority[b.priority];
        return AZSort(A, B);
    
    });
};

export const selectTasksIds = createSelector( 
    state => state.sort,
    selectTasksFiltered,
    (sortCase, tasks) => {
        switch (sortCase) {
            case "status":
                return sortByStatus(tasks).map(task => task.id);
            case "modified date":
                return sortByModifiededTime(tasks).map(task => task.id);
            case "priority":
                return sortByPriority(tasks).map(task => task.id);
            default:
                return sortByCreatedTime(tasks).map(task => task.id);
        }

        
    }
);

