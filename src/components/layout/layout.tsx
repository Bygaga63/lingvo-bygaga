import React, {FC} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {MenuButtonList} from "components/index";
import {Container} from '@material-ui/core';
import {Routes} from "app/routes";

type Props = {
    route: Routes,
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateRows: '7fr 1fr',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        height: '100vh',
        // backgroundColor: '#242424',
    },
    container: {
        height: '100%',
    }
}));

const Layout: FC<Props> = ({children, route}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                {children}
            </Container>
            <MenuButtonList route={route}/>
        </div>
    );
};

export default Layout;
