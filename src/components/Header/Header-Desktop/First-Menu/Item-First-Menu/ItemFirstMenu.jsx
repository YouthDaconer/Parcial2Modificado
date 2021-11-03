import React, { useState } from 'react';

const ItemFirstMenu = (props) => {
    const [isShown, setIsShown] = useState(false);

    const styles = {
        text: {
            color: props.selected ? 'white' : 'black'
        }
    };

    return (
        <div style={{
            ...props.style, backgroundColor: !props.selected ?
                isShown ? 'rgba(0, 0, 0, 0.05)' : 'transparent' : 'black'
        }}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} >
            <span style={styles.text}><strong>{props.title}</strong></span>
        </div>
    );
};

export default ItemFirstMenu;