import React from 'react';

const HeaderMobile = ({ isDesktop }) => {
    return (
        <div style={{ ...styles.headerSmall, display: isDesktop ? 'none' : 'flex' }}>
            <div style={styles.scrollmenu}>
                <a style={styles.link} href="#parati"><strong>Para ti</strong></a>
                <a style={styles.link} href="#nuevo"><strong>Nuevo</strong></a>
                <a style={styles.link} href="#hoy"><strong>Hoy</strong></a>
                <a style={styles.link} href="#masvistos"><strong>Mas vistos</strong></a>
                <a style={styles.link} href="#masgustados"><strong>Mas gustados</strong></a>
                <a style={styles.link} href="#famosos"><strong>Famosos</strong></a>
                <a style={styles.link} href="#famosos"><strong>Entrevistas</strong></a>
                <a style={styles.link} href="#famosos"><strong>Tendencias</strong></a>
                <a style={styles.link} href="#famosos"><strong>Politica</strong></a>
                <a style={styles.link} href="#famosos"><strong>Deportes</strong></a>
            </div>
        </div>
    );
};

const styles = {
    headerSmall: {
        display: 'flex',
        width: '100vw',
        height: '80px',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // scroll
    scrollmenu: {
        padding: '5px',
        backgroundColor: 'white',
        overflow: 'auto',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
    },

    link: {
        display: 'inline-block',
        color: 'black',
        textAlign: 'center',
        padding: '10px',
        textDecoration: 'none',
    }
}
export default HeaderMobile;