import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FiSliders } from 'react-icons/fi';
import { filterBy } from "@store/filter/filter.actions";
import { filter } from '@store/filter/filter.slice';
import styles from "./FilterAndSort.module.css";


export const Filter = () => {
    const dispatch = useDispatch();
    const filterState = useSelector(state => state.filter);
    const [ toggleList, setToggleList ] =  useState( false );


    // handle the filter list toggle
    useEffect(() => {
        let container = document.querySelector("#container-filter");

        let clickHandler = ({ target }) => {
            if( container.contains( target ) ) return;
            setToggleList(false);
        }

        let keyHandler = ({ key }) => {
            if( key !== 'Escape'  ) return;
            setToggleList(false);
        }

        let resizeHandler =  ({ target }) => {
            let { innerWidth } = target;

            if(innerWidth < 415) { 
                setToggleList(false); 
                document.addEventListener('click', clickHandler)
                document.addEventListener('keydown', keyHandler)
                return 
            };
            setToggleList(true);
            document.removeEventListener('click', clickHandler)
            document.removeEventListener('keydown', keyHandler)
        }

        document.addEventListener('click', clickHandler)
        document.addEventListener('keydown', keyHandler)
        window.addEventListener('resize', resizeHandler)

        if (window.innerWidth > 414) {
            document.removeEventListener('click', clickHandler)
            document.removeEventListener('keydown', keyHandler)
            setToggleList(true)
        }

        return () => {
            document.removeEventListener('click', clickHandler)
            document.removeEventListener('keydown', keyHandler)
            window.removeEventListener('resize', resizeHandler)
        }

    }, [])

    const handleToggle = () => {

        setToggleList( prev => !prev );
    }
    
    const onFilter = (e) => {
        e.preventDefault(); 

        dispatch( filterBy( e.target.innerText ) );

    }

    const ListOfFilters = () => {
       return Object.values(filter).map( (value, i) => { 
            let isActive = filterState === value;
            return(
                
                <li key = { i }  className = { isActive? styles.active : "" } >
                    <a href="/#" onClick={ onFilter }> 
                        { value } 
                    </a>
                </li>
            )
        })
    }

    return (
        <div className = { styles.filter }>
            <div id = "container-filter" className={styles.toggleContainer}>
            
                <div className = { `${styles.btnContainer} ` } >
                    filter &nbsp;
                    <button onClick = { handleToggle } 
                    aria-expanded = { toggleList }>
                        <FiSliders />
                    </button>
                </div> 

                <ul id = "toggled-list" style = {{ 
                display: toggleList ? "flex" : "none" }}>
                    { <ListOfFilters /> }
                </ul>
            
            </div>
        </div>
    );
};
