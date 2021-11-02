import React from 'react';
import FirstMenu from './First-Menu/FirstMenu';
import SearchBar from './Search-Bar/SearchBar';
import SecondMenu from './Second-Menu/SecondMenu';

const HeaderDesktop = ({ isDesktop }) => {
    return (
        <div style={{ ...styles.headerLarge, display: isDesktop ? 'flex' : 'none' }}>
            <FirstMenu />
            <SearchBar />
            <SecondMenu />
        </div>
    );
};

const styles = {
    headerLarge: {
        width: '100vw',
        height: '80px',
        display: 'flex',
        flexDirection: 'row',
    }
}

export default HeaderDesktop;