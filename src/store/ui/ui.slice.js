

const initialState = {
    popupWindow: false
}


const uiReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case "ui/popupWindowChnaged": 
            return {
                ...state,
                popupWindow: action.payload
            }

        default: 
            return { ...state }
    }
}

export default uiReducer;