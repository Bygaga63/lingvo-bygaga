import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

type Props = {
    onClick: () => void;
    Icon: any;
    classNames?: string;
}
const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline-block',
        border: '0.1rem solid',
        borderColor: '#9e9e9e',
        borderRadius: '0.4rem',
        // width: '100%',
        // height: '100%',
        padding: '2rem',
    }
}));

const WordButton = ({onClick, Icon, classNames = ''}: Props) => {
    const classes = useStyles();
    return (
        <div className={`${classes.root} ${classNames}`} onClick={onClick}>
            <Icon/>
        </div>
    );
};

export default WordButton;
