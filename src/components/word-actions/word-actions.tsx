import React, {FC} from 'react';
import {WordRepeatStatus} from "components/index";
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Word} from "common/types";

type Props = {
    word: Word;
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 0.7rem',
        alignItems: 'baseline',
    },
    }
));

const WordActions: FC<Props> = ({word}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <WordRepeatStatus status={word.status}/>
            <MoreHorizIcon />
        </div>
    );
};

export default WordActions;
