
import styles from './FormSkeleton.module.css';

export const FormSkeleton = () => {

    const { 
        Form, 
        input_Container, 
        skeleton, 
        label, 
        input, 
        submit, 
        date
    } = styles;

    return (
        <div className = { Form }>
            <div className = { input_Container }>
                <div className = {`${ skeleton } ${ label }`}/>
                <div className = {`${ skeleton } ${ input }`} />
            </div>

            <div className = { date } >
                <div className = { input_Container }>
                    <div className = {`${ skeleton } ${ label }`}/>
                    <div className = {`${ skeleton } ${ input }`} />
                </div>

                <div className = { input_Container }>
                    <div className = {`${ skeleton } ${ label }`}/>
                    <div className = {`${ skeleton } ${ input }`} />
                </div>
           </div> 

            <div className = { input_Container }>
                <div className = {`${ skeleton } ${ label }`}/>
                <div className = {`${ skeleton } ${ input }`} />
            </div>

            <div className = { input_Container }>
                <div className = {`${ skeleton } ${ label }`}/>
                <div className = {`${ skeleton } ${ input }`} />
            </div>

            <div className = { input_Container }>
                <div className = {`${ skeleton } ${ label }`}/>
                <div className = {`${ skeleton } ${ input }`} />
            </div>

            <div className = { input_Container }>
                
                <div className = {`${ skeleton } ${ label }`}/>
                <div className = {`${ skeleton } ${ input }`} />
            </div>

            <div className = {`${ skeleton } ${ submit }`} />
        </div>
    );
};