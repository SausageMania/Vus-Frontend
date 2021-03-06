import React from 'react';
import { Container } from '@material-ui/core';
import { createUseStyles } from 'react-jss';
import logo from '../images/Vatech_logo.png';

const Header = () => {
    const styles = useStyles();
    return (
        <Container className={styles.container} fixed disableGutters>
            {' '}
        </Container>
    );
};

const useStyles = createUseStyles({
    container: {
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '10vh',
        width: '100%',
    },
});

export default Header;
