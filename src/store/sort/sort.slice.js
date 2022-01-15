


const initialState = ""

const sortReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "sort/sortChanged":
            return sortChanged( action.payload );

        default:
            return state;
    };
};

export default sortReducer;



const sortChanged = ( payload ) => {

    // let removeSpace = payload.replace(/\s/g, "");
    // let isPropertyExist = sort.hasOwnProperty( removeSpace );

    // if( isPropertyExist ) {
    //    return sort[removeSpace]; 
    // };
    
    return payload;
} ;