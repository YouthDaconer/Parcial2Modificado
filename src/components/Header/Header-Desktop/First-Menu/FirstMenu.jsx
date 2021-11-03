import React from 'react';
import logoPinterest from './../../../../assets/logopinterest.png';
import ItemFirstMenu from './Item-First-Menu/ItemFirstMenu';

const FirstMenu = () => {
    return (
        <div style={styles.firstIcons}>
            <img src={logoPinterest} alt="logoP" style={styles.logoP} />
            <ItemFirstMenu title="Inicio" style={styles.icon} selected={true} />
            <ItemFirstMenu title="Hoy" style={styles.icon} selected={false} />
        </div>
    );
};

const styles = {
    firstIcons: {
        width: '300px',
        margin: '2px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    logoP: {
        cursor: 'pointer',
        width: '30px',
        height: '30px',
    },
    icon: {
        cursor: 'pointer',
        width: '70px',
        height: '50px',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default FirstMenu;