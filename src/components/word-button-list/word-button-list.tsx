import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import WordButton from "./word-button";

type Props = {
}
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
    },
}));

const WordButtonList = ({ }: Props) => {
    const classes = useStyles();
    const onClickTyping = () => console.log('Typing');
    const onClickPeep = () => console.log('Peep');
    const onClickChoose = () => console.log('Choose');
    return (<div className={classes.root}>
            <WordButton onClick={onClickTyping} icon={'typing'}/>
            <WordButton onClick={onClickPeep} icon={'peep'}/>
            <WordButton onClick={onClickChoose} icon={'choose'}/>
        </div>
    );
};

export default WordButtonList;