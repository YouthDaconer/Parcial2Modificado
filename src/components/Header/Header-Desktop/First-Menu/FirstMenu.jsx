import React from 'react';
import logoPinterest from './../../../../assets/logopinterest.png';

const FirstMenu = () => {
    return (
        <div style={styles.firstIcons}>
            <img src={logoPinterest} alt="logoP" style={styles.logoP} />
            <div style={styles.inicio} >
                <span><strong>Inicio</strong></span>
            </div>
            <div style={styles.hoy} >
                <span><strong>Hoy</strong></span>
            </div>
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
    inicio: {
        cursor: 'pointer',
        width: '70px',
        height: '50px',
        borderRadius: '50px',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hoy: {
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