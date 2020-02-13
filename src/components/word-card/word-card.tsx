import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {CardContent, RememberChoiceButtonList, WordRepeatStatus} from 'components';
import {Category, Status} from "common/types";



const useStyles = makeStyles(theme => ({
    root: {
        height: 'auto',
        padding: '1vh 0',
        // position: 'relative',
        display: 'flex',
        flexDirection: 'column',

    },
    rememberChoice: {
        position: 'relative',
        left: 0,
    },
}));

const WordCard = () => {

};

export default WordCard;
