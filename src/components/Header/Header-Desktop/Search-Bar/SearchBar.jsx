import React, { useState } from 'react';

const SearchBar = (props) => {
    const [isShown, setIsShown] = useState(false);

    const styles = {
        search: {
            cursor: 'text',
            width: '100vw',
            backgroundColor: isShown ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)',
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
        }
    };

    return (
        <input style={styles.search} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} placeholder="&#xF002; Buscar" />
    );
};

export default SearchBar;