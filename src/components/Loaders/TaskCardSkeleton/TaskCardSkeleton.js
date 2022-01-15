import styles from './TaskCardSkeleton.module.css';

export const TaskCardSkeleton = () => {
    
    const { 
        _skeleton, 
        head, 
        skeleton, 
        body, 
        left_float, 
        right_float ,
        footer
    } = styles;

    return (

        <div className = { _skeleton } >
            <div className = { head }>
                <div className = { left_float } >
                    <div className = { skeleton } />
                </div>

                <div className = { right_float } >

                    <div className = { skeleton } />
                </div>
            </div>

            <div className = { body }>
                <div className = { left_float }>
                    <div className = { skeleton }></div>
                    <div className = { skeleton }></div>
                    <div className = { skeleton }></div>
                    <div className = { skeleton }></div>
                    <div className = { skeleton }></div>
                    <div className = { skeleton }></div>
                </div>

                <div className = { right_float } >
                    <div className = { skeleton } />
                    <div className = { skeleton } />
                    <div className = { skeleton } />
                    <div className = { skeleton } />
                </div>
            </div>

            <div className = { footer }>
                <div className = { left_float } >
                    <div  className = { skeleton } />
                    <div  className = { skeleton } />
                </div>

                <div className = { right_float } >
                    <div className = { skeleton } />
                    <div className = { skeleton } />
                </div>
            </div>
        </div>


    );
};