
export const filter = {
    All: "all",
    Active: "active",
    InProgress: "in progress",
    Todo: "todo",
    Done: "done"
}

const initialState = "active"

const statusFiltered = ( payload ) => {
    
    let spacesRemoved = payload.replace(/\s/g, "");
    if(filter.hasOwnProperty(spacesRemoved)) return filter[ spacesRemoved ];
    return "All"
}

const filterReducer = (state = initialState, action) => {
    switch ( action.type ) {

        case "filters/statusFiltered":
            return statusFiltered(action.payload);
        
        default:
           return  state;
    }
}

export default filterReducer;



