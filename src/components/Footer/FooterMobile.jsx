import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';

const FooterMobile = ({ isDesktop }) => {
    const styles = {
        icon: {
            color: 'rgba(0, 0, 0, 0.5)',
            fontSize: '25px',
            margin: '0 auto',
            marginTop: '10%'
        },
        container: {
            // margin: 'auto',
            background: 'white',
            width: '300px',
            height: '75px',
            padding: '0',
            borderRadius: '75px',
            border: 'solid thin #E7ECEA',
            boxShadow: '0 10px 30px rgba(#414856, 0.05)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '20px',
            zIndex: '999',
        },
        tabBar: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            margin: '0 auto',
            width: '90%',
            height: '100px',
            marginTop: '20%'
        },
        tab: {
            textAlign: 'center',
            position: 'relative',
            cursor: 'pointer',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around'
        }
    };

    const menu = {
        tabs: [
            { text: 'Home', icon: faHome, key: 0 },
            { text: 'Search', icon: faSearch, key: 1 },
            { text: 'Comments', icon: faCommentDots, key: 2 },
            { text: 'User', icon: faUser, key: 3 }
        ],
        current: 0
    }

    return (
        <div style={{ ...styles.container, display: isDesktop ? 'none' : 'flex' }}>
            <div style={styles.tabBar}>
                {
                    menu.tabs.map(tab =>
                        <div id={tab.key} key={tab.key} style={styles.tab}>
                            <FontAwesomeIcon icon={tab.icon} style={styles.icon} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FooterMobile;