import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { maxTextLength, disableTextFormat } from '@utils/helpers/text.helpers';
import { PieceOfData } from '@components/PieceOfData/PieceOfData';

import { FiUser } from 'react-icons/fi';
import { FiPlayCircle } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';
import { GrSort } from 'react-icons/gr';
import styles from '../TaskCard.module.css';

export const Body = (props) => {
    const { id, title, description, user, startDate, endDate, priority } = props;
    const maxTitleLength = 15;
    const maxDescriptionLength = 100;
    const P = useRef(null);

    useEffect(() => {
        P.current.innerHTML = disableTextFormat(maxTextLength( description, maxDescriptionLength ))
    }, [ description ])

    return (
        <div className={ styles.body }>
            <div className = { styles.leftFloat }>

                <Link to = {`task/${ id }`}>
                    <h3> { maxTextLength( title, maxTitleLength ) } </h3>
                </Link>
                <p ref = { P }></p>

            </div>

            <div className = { styles.rightFloat } >

                <PieceOfData clip = { user }                    icon = { <FiUser /> } />
                <PieceOfData clip = { startDate || "Anytime" }  icon = { <FiPlayCircle /> } />
                <PieceOfData clip = { endDate   ||  "Anytime"}  icon = { <FiCheck /> } />
                <PieceOfData className = {`${styles[ priority ]} ${priority}`} 
                clip = { priority } 
                icon = { <GrSort /> } />

            </div>
        </div>

    );
};
