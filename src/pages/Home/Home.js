import { IconButton } from '@components/IconButton/IconButton';
import { useSelector } from 'react-redux';
import { PageTitle } from '@components/PageTitle/PageTitle';
import { TasksList } from './TasksList/TasksList';
import { FilterAndSort } from "./FilterAndSort/FilterAndSort";
import { TaskCardSkeleton } from '@components/Loaders';
import styles from './Home.module.css';


export const Home = () => {
    const isFetching = useSelector(state => state.tasks.fetchStatus);
    return (
        <>
            <IconButton />
            <div className = { styles.timeLineContainer }>
                <PageTitle title = "Time Line" />

                <div className = { styles.timeLine }>

                    <FilterAndSort />
                    {
                        isFetching === "idle" ?
                        <TasksList  /> : 
                        <div className = 'sort-cards-wrapper' style = {{ paddingBottom: "2rem" }}>
                            <TaskCardSkeleton />
                            <TaskCardSkeleton />
                            <TaskCardSkeleton />
                        </div> 
                    }
                    
                </div>
            </div>

        </>
            
    );
};