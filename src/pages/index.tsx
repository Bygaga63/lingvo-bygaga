import {NextPage} from 'next';
import Link from "next/link";
import {Card} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuButtonList from "components/menu-button-list/menu-button-list";

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '2vh',
    },
    card: {
        height: '85vh',
    },
}));

const Home: NextPage<{ userAgent: string }> = ({userAgent}) => {
    const classes = useStyles();
    return (<div className={classes.root}>
        <Card className={classes.card}>

        </Card>
        <MenuButtonList/>
    </div>)
};


Home.getInitialProps = async ({req}) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return {userAgent};
};

export default Home;
