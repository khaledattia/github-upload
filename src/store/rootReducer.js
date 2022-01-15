import { combineReducers } from 'redux';
import tasksReducer   from '@store/tasks/tasks.slice';
import filterReducer  from '@store/filter/filter.slice';
import sortReducer    from '@store/sort/sort.slice';
import uiReducer      from '@store/ui/ui.slice';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    filter: filterReducer,
    sort: sortReducer,
    ui: uiReducer
});

export default rootReducer;