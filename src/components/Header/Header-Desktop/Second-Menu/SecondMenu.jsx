import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCommentDots, faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SecondMenu = () => {
    return (
        <div style={styles.secondIcons}>
            <FontAwesomeIcon icon={faBell} style={styles.icon2} />
            <FontAwesomeIcon icon={faCommentDots} style={styles.icon2} />
            <FontAwesomeIcon icon={faUserCircle} style={styles.icon2} />
            <FontAwesomeIcon icon={faChevronDown} style={styles.icon2} />
        </div>
    );
};

const styles = {
    secondIcons: {
        width: '300px',
        margin: '2px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    icon2: {
        cursor: 'pointer',
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '30px'
    },
}

export default SecondMenu;