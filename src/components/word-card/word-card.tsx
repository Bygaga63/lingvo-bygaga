import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {CardContent, RememberChoiceButtonList, WordRepeatStatus} from 'components';
import {Category, Status} from "common/types";

const TEMP_WORD = {
    id: 1,
    status: Status.new,
    text: 'leaver',
    transcription: "['leda]",
    category: Category.t3000,
    audio: '',
};

const useStyles = makeStyles(theme => ({
    root: {
        height: '88vh',
        padding: '1vh 0',
        // position: 'relative',
        display: 'flex',
        flexDirection: 'column',

    },
    rememberChoice: {
        position: 'relative',
        left: 0,
        // bottom: '1vh',
    },
}));

const WordCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent word={TEMP_WORD}/>
            <RememberChoiceButtonList status={TEMP_WORD.status} classNames={classes.rememberChoice}/>
        </Card>
    );
};

export default WordCard;
