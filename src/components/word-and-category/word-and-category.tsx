import React, {FC} from 'react';
import Typography from '@material-ui/core/Typography';
import {Categories} from "entitites/category";
import {Word} from "common/types";
import {makeStyles} from '@material-ui/core/styles';

type Props = {
    word: Word;
    className: string;
}

const useStyles = makeStyles(theme => ({
    root: {
    },
    category: {
        fontSize: '0.7rem',
        borderColor: '#787878',
    },
    text: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        width: '250px',
    }
}));

const WordAndCategory: FC<Props> = ({word, className}) => {
    const classes = useStyles();

    return (
        <div className={`${classes.root} ${className}`}>
            <Typography className={classes.category} component={'p'} variant={"caption"}>
                {Categories[word.category]}
            </Typography>
            <Typography className={classes.text} variant={"h5"}>
                {word.text}
            </Typography>
        </div>
    );
};

export default WordAndCategory;
