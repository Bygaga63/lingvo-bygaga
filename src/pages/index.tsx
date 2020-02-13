import React from 'react';
import {NextPage} from 'next';
import {CardContent, RememberChoiceButtonList, WordCard} from 'components';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Category, Status, Word} from "common/types";

const TEMP_WORD = {
    id: 1,
    status: Status.fifthRepeat,
    text: 'leaver leaver leaver leaver leaver',
    transcription: "['leda]",
    category: Category.t3000,
    audio: '',
};

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        padding: '1vh 0',
        display: 'flex',
        flexDirection: 'column',
    },
    rememberChoice: {
        position: 'relative',
        left: 0,
    },
}));

type Props = {
    userAgent: string;
    word: Word;
}

const SearchPage: NextPage<Props> = ({userAgent, word}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent word={word}/>
            <RememberChoiceButtonList status={TEMP_WORD.status} classNames={classes.rememberChoice}/>
        </Card>
    );
};


SearchPage.getInitialProps = async ({req}) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return {userAgent, word: TEMP_WORD};
};

export default SearchPage;
