import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import {Status} from "common/types";

const left = 'left';
const right = 'right';

type Position = typeof left | typeof right;

type Props = {
    Icon: any;
    status: Status;
    position: Position
}
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        padding: '2px',
    },
}));

const newLabels = {
    [right]: 'Я знаю это слово, пропустить',
    [left]: 'Я не знаю это слово, изучать'
};

const repeatLabels = {
    [right]: 'Запомнил, отложить слово для повтора',
    [left]: 'Повторить это слово еще',
};

const getLabelByStatus = (status: Status, position: Position) => {
    if (status === Status.new) {
        return newLabels[position];
    } else {
        return repeatLabels[position];
    }
};

const RememberChoiceButton: FC<Props> = ({Icon, status, position}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {(position === left) && <Icon/>}
            <div>
                <Typography align={"center"} component={'p'} variant={"caption"}>
                    {getLabelByStatus(status, position)}
                </Typography>
            </div>
            {position === right && <Icon/>}
        </div>
    );
};

export default RememberChoiceButton;
