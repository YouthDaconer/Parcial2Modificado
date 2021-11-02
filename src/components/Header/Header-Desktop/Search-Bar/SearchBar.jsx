import React from 'react';

const SearchBar = () => {
    return (
        <input style={styles.search} placeholder="&#xF002; Buscar">
        </input>
    );
};

const styles = {
    search: {
        cursor: 'text',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        margin: '16px 2px',
        borderRadius: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        paddingLeft: '20px',
        fontFamily: 'Arial, FontAwesome',
        placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
        fontSize: '15px',
        marginLeft: '5px',
        borderWidth: 0,
    },
    icon: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '20px'
    },
    buscar: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '20px',
        marginLeft: '5px',
    }
}

export default SearchBar;