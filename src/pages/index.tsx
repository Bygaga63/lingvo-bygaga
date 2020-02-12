import React from 'react';
import {NextPage} from 'next';
import {makeStyles} from '@material-ui/core/styles';
import { WordCard, MenuButtonList } from 'components';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        padding: '2vh 0 1vh 0',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh'
    },
    card: {
        height: '88vh',
    },
}));

const Home: NextPage<{ userAgent: string }> = ({userAgent}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <WordCard/>
            <MenuButtonList/>
        </div>
    )
};


Home.getInitialProps = async ({req}) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return {userAgent};
};

export default Home;
