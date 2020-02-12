import React, {FC} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {WordAndCategory, WordButtonList, WordRepeatStatus} from "components";
import {Word} from "common/types";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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
        position: 'relative',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 0.7rem',
    },

    buttons: {
        position: 'absolute',
        top: '35vh',
        width: '100%',
        textAlign: 'center',
    }

}));



const CardContent: FC<Props> = ({word}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <WordRepeatStatus status={word.status}/>
                <MoreHorizIcon />
            </div>

            <WordAndCategory word={word}/>


            <WordButtonList classNames={classes.buttons} status={word.status}/>
        </div>
    );
};

export default CardContent;
