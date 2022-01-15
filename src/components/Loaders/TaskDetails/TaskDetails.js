import styles from './TaskDetails.module.css';


// ===================
//  1. Actions Section
// ===================
const ActionsSkeleton = () => {

    const { action_Skeleton, right_float, left_float, skeleton } = styles;

    return (
        
        <div className = { action_Skeleton }>
            
            <div className = { left_float } >
                <div className = { skeleton }/>
                <div className = { skeleton }/>
            </div>

            <div className = { right_float }>
                <div className = { skeleton }/>
                <div className = { skeleton }/>
            </div>
        
        </div>

    ) ;
};


// ===================
//  2. Title Section
// ===================
const TitleSkeleton = () => {
    
    const { skeleton, title_Skeleton } = styles;
    
    return (

        <div className = {`${ skeleton } ${ title_Skeleton }`}  />
    );
};


// =======================
//  3. Description Section
// =======================
const DescriptionSkeleton = () => {
  
    const { skeleton, 
        item, 
        description_Skeleton, 
        _h, 
        list,
        _circle,
        text
    } = styles;

    return (
        <div className = { description_Skeleton }>
            <div className = { skeleton } />
            <div className = { skeleton } />
            <div className = { skeleton } />
            
            <div className = {`${ skeleton } ${ _h }`} />
            
            <div className = { list }>
                <div className = { item }>
                    <div className = {`${ skeleton } ${ _circle }`} />
                    <div className = {`${ skeleton } ${ text }`} />
                </div>

                
                <div className = { item }>
                    <div className = {`${ skeleton } ${ _circle }`} />
                    <div className = {`${ skeleton } ${ text }`} />
                </div>

                
                <div className = { item }>
                    <div className = {`${ skeleton } ${ _circle }`} />
                    <div className = {`${ skeleton } ${ text }`} />
                </div>

                
                <div className = { item }>
                    <div className = {`${ skeleton } ${ _circle }`} />
                    <div className = {`${ skeleton } ${ text }`} />
                </div>
            </div>
        </div>
    );
};

const Requirments = () => {
    const { requirments_Skeleton, skeleton } = styles;

    return (
        <div className = { requirments_Skeleton }>
            <div className = { skeleton } />
            <div className = { skeleton } />
            <div className = { skeleton } />
            <div className = { skeleton } />
        </div>
    );
};

export { Requirments, ActionsSkeleton, TitleSkeleton, DescriptionSkeleton }