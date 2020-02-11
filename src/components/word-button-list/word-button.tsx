import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

type Props = {
    onClick: () => void;
    icon: string;
}
const useStyles = makeStyles(theme => ({
}));

const WordButton = ({onClick, icon}: Props) => {
    const classes = useStyles();
    return (<div onClick={onClick}>
        {icon}
    </div>
);
};

export default WordButton;