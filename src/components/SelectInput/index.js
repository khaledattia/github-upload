


import { useRef, useState } from 'react';
import { ListDisplay } from './helpers/ListDisplay';
import { filter } from './helpers/filter.helpers';
import { Options } from './components/OptionsList';
import { Actions } from './components/Actions';
import styles from "./SelectInput.module.css";

/* 
    - options could be array of Objects with property "display", "value" or just a "string"
    .. this will display the property 
    .. and use the value as the main returned value

        1. Object with display property
            const options = [ 
                { display: "option1" }
            ] 
        
        2. Object with display value
        --- const options = [ 
                { value: "option1" }
            ] 

        3. a String options
        --- const options = [ 
                "option1"
            ]

    - options could be Object with 2 properties
    .. value   - will be the main returned value
    .. display - will be just for display purpose

    --- const options = [ 
            {value: "1", display:"Tarek"}
        ]
*/ 


// Main props
// - Options
// - Value
// - setvalue
export const SelectInput = (props) => {
    const { inputProps, onChange, value, inputOptions = []} = props;
    const millSecDuration = 150;
    const list = useRef(null);
    const spanValue = useRef(null);
    const input = useRef(null);
    const [{ show, focus }, { showList, hideList }] = ListDisplay(list, millSecDuration);
    const [ keywords, setKeywords ] = useState('');
    const [ activeDescendant, setActiveDescendant ] = useState(value);
    const { options } = refineOptions(inputOptions);


    const onSelect = (selectedValue) => {

        let inputElement = {target: input.current}
        inputElement.target.value = selectedValue;

        onChange(inputElement);
    }

    // ==============================
    // --- Key Down event handler ---
    // ==============================
    // Handle the selection (Arrow "Up" and "Down")
    // Set the selected value upon the "Enter" is pressed
    // Close the options list on "Escape"
    const keydownEvent = (e) => {
        let arr = keywords ? filter(keywords, options) : options;
        let activeDescendantIndex = arr.indexOf(activeDescendant);
        switch(e.key){
            case "Escape":
                setActiveDescendant(() => value);
                e.target.blur();
            break;
                
            case "Enter":
                if(activeDescendant){
                    onSelect(arr[activeDescendantIndex]);
                    e.target.blur();
                };
            break;

            case "ArrowUp":
                if(activeDescendantIndex > 0){ 
                    activeDescendantIndex -= 1; 
                    setActiveDescendant(arr[activeDescendantIndex])}
                else activeDescendantIndex = arr.length - 1; setActiveDescendant(arr[activeDescendantIndex]);
                e.preventDefault();
            break;

            case "ArrowDown":
                if(activeDescendantIndex < arr.length - 1){ 
                    activeDescendantIndex += 1;
                    setActiveDescendant(arr[activeDescendantIndex]);}
                else activeDescendantIndex = 0; setActiveDescendant(arr[activeDescendantIndex]);
                e.preventDefault();
            break;

            default:
                setActiveDescendant(arr[activeDescendantIndex]);
            break;
        };
    };

    const onFocus = (e) => {
        showList();
        setKeywords("");
        setActiveDescendant(() => value);
        e.target.value = '';
    };

    const onLoseFocus = (e) => {
        hideList();
        spanValue.current.style.visibility = "visible";
        e.target.value = value;

    };

    const onFilter = (e) => {
        e.preventDefault();

        let val = e.target.value;
        if(!val) spanValue.current.style.visibility = "visible";
        else spanValue.current.style.visibility = "hidden";
        
        setKeywords(val);
    };

    const clearValues = () => {
        onSelect('');
        setActiveDescendant(() => '');
    };


    return (
        <>
            
            <div className = { styles.wrapper }>

                <Actions clearValue = { clearValues } 
                value = { value } 
                focus = { focus } 
                millSecDuration = { millSecDuration } 
                elementRef = { spanValue } />

                { <input 
                    { ...inputProps }
                    ref = { input }
                    defaultValue = { value }
                    onChange     = { onFilter }
                    onFocus      = { onFocus }
                    onBlur       = { onLoseFocus } 
                    onKeyDown    = { e => keydownEvent(e) }/> 
                }

                <ul ref = { list } className = {`${ styles.list } ${ focus ? "active" : "" }`} >
                    {
                        show ? <Options 
                        options = { keywords ? filter( keywords, options ) : options } 
                        optionProps = {{ onSelect, selected: value, activeDescendant, setActiveDescendant }} /> : 
                        ""
                    }
                </ul> 
            </div>
        </>
    )
}






/*
    refine Options function return array of options
    as the input Component can define options in different ways
    like array of string options directly or objects
        A) options ["string 1", "string 2", etc..]
        B) options [{value: "val.1", display:"disp.1"}, etc..]

    in the example (B) the object containing the value and the displayed 

    properties:
        - value: the returned value on select Action
        - display: in case you want to display something else instead of the value

*/
const refineOptions = (optionsArr) => {
    let options = [];
    let arrType = null;

    if(optionsArr) optionsArr.forEach(option => {
        let type = typeof(option);
        

        if( type === 'number' || type === 'string'){
            options.push(option);

        }else if (type === 'object'){
            if(option.display) options.push(option.display);
            else if(option.value) options.push(option.value);

        };

        if(!arrType){
            arrType = type;
        };
    });

    return {options, arrType};
};