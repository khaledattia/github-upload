

import styles from "./PieceOfData.module.css";



// giving revers bool value will make the direction from rtl or ltr
export const PieceOfData = ( props ) => {
    const { icon, clip, revers = '', className } = props;
    const { pieceOfData,  _revers } = styles;
    const isReversed = revers ? _revers : ""

    return (
        <div 
        className = { `${ pieceOfData } ${ className } ${ isReversed } ` } 
        style = {{ display: "flex", alignItems: "center" }}>

            <span>
                { icon }
            </span>

            <span> { clip } </span>
        </div>
    );
};