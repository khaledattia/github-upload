import { useEffect, useState, useLayoutEffect } from 'react';


export const ListDisplay = (list, animationDuration = 250) => {
    const [ show, setShow ]       = useState(false);
    const [ focus, setFocus ]     = useState(false);
    const [ counter, setCounter ] = useState(0);

    useLayoutEffect(() => {
        list.current.style.transitionDuration = animationDuration + "ms";

    }, [ animationDuration, list ]);

    useEffect(() => {
        if(!focus){
            return () => {
                clearTimeout(counter)
            }
        }
        
    }, [focus, counter]);

    const showList = () => {
        clearTimeout(counter);
        setFocus(true);
        setShow(true);

    }

    const hideList = () => {

        let funRef = setTimeout(() => {
                    
            setShow(false);

        }, animationDuration);

        setFocus(false)
        setCounter(funRef);

    }

    
    return [
        { show, focus }, 
        { showList, hideList }
    ]
}

