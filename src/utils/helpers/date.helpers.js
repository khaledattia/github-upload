




// get both date and time
export const getDateAndTime = () => {
    let date = getDate();
    let time = getTime();

    return { date, time };
    
}


export const getTime = () => {

    let now = new Date();

    let hours   = addZero(now.getHours());
    let mins    = addZero(now.getMinutes());
    let seconds = addZero(now.getSeconds());
    let millSec = addZero(now.getMilliseconds());

    let time = `${ hours }:${ mins }:${ seconds }:${ millSec }`;

    return time;
}

export const getDate = () => {
    
    let now = new Date();

    let day   = addZero(now.getDate());
    let month = addZero(now.getMonth() + 1);
    let year  = now.getFullYear();

    let date = `${day}-${month}-${year}`;

    return date;
}


// formate time to be 12-clock instead of 24-clock
// hte function takes the time formated as string  
// "18:00" and returns "06:00 PM"; 
export function time12Hour( time ) {

        let hour        = parseInt( time.slice( 0,2 ) );
        let mins        = parseInt( time.slice( 3, 5 ) );
        let calcResult  = hour > 12 ? ( hour - 12 ) : hour

        let hourFormat  = addZero( calcResult );
        let minsFormat  = isNaN( mins ) ? "00" : addZero( mins );

        let getFullTime = `${ hourFormat }:${ minsFormat }`;
        let format      = hour > 12? `${ getFullTime } PM` : `${ getFullTime } AM`;
        try {

        if( hour > 24 ) throw new Error("cannot operate on time greater than 24 hours");
        if( !time.trim() ) throw new Error("cannot read time of null");
        if( isNaN( hour ) ) throw new Error("cannot read time of NaN");
        
        return format;

    }catch( err ) {
        throw err
    }
    
}

const addZero = (value) => {
    return value < 10 ? `0${value}` : value;
}