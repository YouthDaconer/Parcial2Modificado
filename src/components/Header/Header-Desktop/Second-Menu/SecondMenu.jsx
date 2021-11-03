import React from 'react';
import { faBell, faCommentDots, faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ItemSecondMenu from './Item-Second-Menu/ItemSecondMenu';

const SecondMenu = () => {
    return (
        <div style={styles.secondIcons}>
            <ItemSecondMenu style={styles.icon2} icon={faBell} />
            <ItemSecondMenu style={styles.icon2} icon={faCommentDots} />
            <ItemSecondMenu style={styles.icon2} icon={faUserCircle} />
            <ItemSecondMenu style={styles.icon2} icon={faChevronDown} />
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
        fontSize: '25px',
        padding: '9px',
        borderRadius: '50px'
    },
}

export default SecondMenu;