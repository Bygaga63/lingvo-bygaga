import React, {FC} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {WordActions, WordAndCategory, WordButtonList, WordRepeatStatus} from "components";
import {Word} from "common/types";

type Props = {
    word: Word;
}

const useStyles = makeStyles(theme => ({
    root: {
        overflowY: 'scroll',
        height: '100%',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        display: 'grid',
        gridTemplateRows: '1fr 6fr 9fr',
        // position: 'relative',
    },
    buttons: {
        textAlign: 'center',
    },
    wordAndCategory: {
        padding: '3vh 10vw 0 10vw',
    }
}));



const CardContent: FC<Props> = ({word}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <WordActions word={word}/>
            <WordAndCategory className={classes.wordAndCategory} word={word}/>
            <WordButtonList className={classes.buttons} status={word.status}/>
        </div>
    );
};

export default CardContent;
