import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import WordButton from "./word-button";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import WidgetsIcon from '@material-ui/icons/Widgets';
import Grid from '@material-ui/core/Grid';
import {Status} from "common/types";


type Props = {
    status: Status;
    className?: string;
}
const useStyles = makeStyles(theme => ({
    root: {
        // padding: '15px',
        // justifyContent: 'space-around',
    },

    buttonList: {
        display: 'flex',
        justifyContent: 'space-around',
    },
}));

const WordButtonList: FC<Props> = ({status, className = ''}) => {
    const classes = useStyles();
    const onClickTyping = () => console.log('Typing');
    const onClickPeep = () => console.log('Peep');
    const onClickChoose = () => console.log('Choose');
    return (
        <div className={`${classes.root} ${className}`}>

            {(status === Status.new) ?
                    <WordButton onClick={onClickPeep} Icon={RemoveRedEyeIcon}/>
                :

                <div className={classes.buttonList}>
                    <WordButton onClick={onClickTyping} Icon={KeyboardIcon}/>

                    <WordButton onClick={onClickPeep} Icon={RemoveRedEyeIcon}/>

                    <WordButton onClick={onClickChoose} Icon={WidgetsIcon}/>
                </div>
            }
        </div>
    );
};

export default WordButtonList;
