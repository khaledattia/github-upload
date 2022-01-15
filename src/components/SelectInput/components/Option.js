import styles from '../SelectInput.module.css';

export const Option = ( props ) => {
    const { 
        item, 
        onSelect, 
        selected, 
        activeDescendant, 
        setActiveDescendant 
    } = props;
    const { activedescendant, _selected, _item } = styles;
    const activeHover = activeDescendant === item;
    const isSelected  = item.toLowerCase() === selected.toLowerCase() ? _selected : "";
    const isActiveDescendant = activeHover && !isSelected ? activedescendant : "";

    return (
        <li 
        onClick   = { () => onSelect( item ) } 
        className = {`${ isSelected } ${ isActiveDescendant }`} 
        onMouseMoveCapture = { () => setActiveDescendant( () => item ) }>

            <span className = {`--text-capitalize ${ _item }`}> 
                { item } 
            </span>
        
        </li>
    )
}