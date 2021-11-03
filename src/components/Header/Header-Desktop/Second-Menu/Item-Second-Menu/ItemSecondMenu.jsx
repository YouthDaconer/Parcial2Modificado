import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemSecondMenu = (props) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div style={{
            ...props.style, backgroundColor: isShown ? 'rgba(0, 0, 0, 0.05)' : 'transparent'
        }}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} >
            <FontAwesomeIcon icon={props.icon} />
        </div>
    );
};

export default ItemSecondMenu;