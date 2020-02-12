import React, {FC} from 'react';
import Typography from '@material-ui/core/Typography';
import {Categories} from "entitites/category";
import {Word} from "common/types";
import {makeStyles} from '@material-ui/core/styles';

type Props = {
    word: Word;
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: '3vh 10vw 0 10vw'
    },
    category: {
        fontWeight: 100,
        fontSize: '0.7rem',
        borderColor: '#787878',
    },
}));

const WordAndCategory: FC<Props> = ({word}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.category} component={'p'} variant={"caption"}>
                {Categories[word.category]}
            </Typography>
            <Typography variant={"h5"}>
                {word.text}
            </Typography>
        </div>
    );
};

export default WordAndCategory;
